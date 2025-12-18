import json
import os
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

# Configuration
DATA_PATH = "app/data/assessments.json"
INDEX_PATH = "app/data/vector_index.pkl"
MODEL_NAME = "all-MiniLM-L6-v2"

class AssessmentRetriever:
    def __init__(self, data_path=DATA_PATH, index_path=INDEX_PATH, model_name=MODEL_NAME):
        self.data_path = data_path
        self.index_path = index_path
        self.model_name = model_name
        self.model = None
        self.assessments = []
        self.embeddings = None
        
        self.load_resources()

    def load_data(self):
        """Loads assessment data from JSON file."""
        if not os.path.exists(self.data_path):
            print(f"Data file not found at {self.data_path}")
            self.assessments = []
            return
            
        try:
            with open(self.data_path, 'r', encoding='utf-8') as f:
                self.assessments = json.load(f)
        except Exception as e:
            print(f"Error loading data: {e}")
            self.assessments = []

    def load_resources(self):
        print("Loading RAG resources...")
        self.load_data()

        try:
            self.model = SentenceTransformer(MODEL_NAME)
        except Exception as e:
            print(f"Error loading model: {e}")
            raise

        if os.path.exists(INDEX_PATH) and self.assessments:
            try:
                with open(INDEX_PATH, 'rb') as f:
                    saved_data = pickle.load(f)
                    if len(saved_data['embeddings']) == len(self.assessments):
                        self.embeddings = saved_data['embeddings']
                        print("Vector index loaded.")
                    else:
                        print("Index mismatch. Re-indexing...")
                        self.create_index()
            except Exception:
                print("Error loading index. Re-indexing...")
                self.create_index()
        elif self.assessments:
            print("Index not found. Creating new index...")
            self.create_index()
        else:
            print("No data to index.")

    def create_index(self):
        if not self.assessments:
            return
            
        texts = [
            f"{a['name']} {a.get('description', '')} {a.get('full_text', '')}" 
            for a in self.assessments
        ]
        
        print(f"Encoding {len(texts)} assessments...")
        self.embeddings = self.model.encode(texts, show_progress_bar=True)
        
        # Save index
        with open(INDEX_PATH, 'wb') as f:
            pickle.dump({'embeddings': self.embeddings}, f)
        print("Index saved.")

    def retrieve(self, query: str, top_k: int = 20):
        if not self.assessments or self.embeddings is None:
            return []

        # Encode query
        query_emb = self.model.encode([query])
        
        # Cosine similarity
        scores = cosine_similarity(query_emb, self.embeddings)[0]
        
        # Top K
        top_indices = np.argsort(scores)[::-1][:top_k]
        
        results = []
        for idx in top_indices:
            item = self.assessments[idx].copy()
            item['score'] = float(scores[idx])
            results.append(item)
            
        return results

    def recommend(self, query: str):
        candidates = self.retrieve(query, top_k=20)
        
        # Balance technical vs behavioral assessments logic could go here.
        # Currently standard filtering to meet min 5, max 10 requirement.
        
        final_list = []
        seen_urls = set()
        
        for cand in candidates:
            if cand['url'] in seen_urls:
                continue
            if cand['score'] < 0.2:
                continue
                
            seen_urls.add(cand['url'])
            
            types = cand.get('test_type', ["General"])
            
            formatted = {
                "url": cand.get('url', ''),
                "name": cand.get('name', 'Unknown Assessment'),
                "description": cand.get('description', '')[:200],
                "duration": cand.get('duration', 30),
                "remote_support": cand.get('remote_support', "Yes"),
                "adaptive_support": cand.get('adaptive_support', "No"),
                "test_type": types
            }
            final_list.append(formatted)
            
            if len(final_list) >= 10:
                break
        
        return final_list

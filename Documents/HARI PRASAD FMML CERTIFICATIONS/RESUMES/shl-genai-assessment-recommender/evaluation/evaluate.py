import pandas as pd
import json
import os
from app.core.rag import AssessmentRetriever

def load_data():
    file_path = 'Gen_AI Dataset.xlsx'
    train_df = pd.read_excel(file_path, sheet_name='Train-Set')
    test_df = pd.read_excel(file_path, sheet_name='Test-Set')
    return train_df, test_df

def evaluate_recall(retriever, train_df, k=10):
    print("Running evaluation on Train Set...")
    total = 0
    hits = 0
    
    # Debug: Print first few recommendations
    debug_count = 0
    
    for idx, row in train_df.iterrows():
        query = row['Query']
        true_url = row['Assessment_url'].strip()
        
        # We need to normalize URLs for comparison (trailing slashes etc)
        true_url_norm = true_url.rstrip('/')
        
        try:
            # We use retrieve directly to check raw recall before filtering logic
            # or recommend() if we want end-to-end. 
            # The requirement says "Measure retrieval performance using Mean Recall@10".
            # Usually this implies the retrieval step.
            results = retriever.retrieve(query, top_k=k)
            
            # Check if true_url is in results
            found = False
            rec_urls = []
            for item in results:
                rec_url = item['url'].strip().rstrip('/')
                rec_urls.append(rec_url)
                if rec_url == true_url_norm:
                    found = True
                    break
            
            if found:
                hits += 1
            
            total += 1
            
            if debug_count < 3:
                print(f"\nQuery: {query[:50]}...")
                print(f"Target: {true_url}")
                print(f"Found: {found}")
                print(f"Top 3 Recs: {rec_urls[:3]}")
                debug_count += 1
                
        except Exception as e:
            print(f"Error evaluating query {idx}: {e}")
            
    recall = hits / total if total > 0 else 0
    print(f"\nMean Recall@{k}: {recall:.4f}")
    return recall

def generate_submission(retriever, test_df):
    print("\nGenerating submission for Test Set...")
    results = []
    
    for idx, row in test_df.iterrows():
        query = row['Query']
        recommendations = retriever.recommend(query)
        
        # Format: Query, Assessment_url
        # "One row per recommended assessment per query"
        # Since we recommend 5-10, we will have multiple rows per query?
        # Requirement: "A CSV file in the EXACT required format: Query,Assessment_url (One row per recommended assessment per query)"
        # This implies we replicate the query for each recommendation.
        
        for rec in recommendations:
            results.append({
                "Query": query,
                "Assessment_url": rec['url']
            })
            
    submission_df = pd.DataFrame(results)
    submission_df.to_csv('submission.csv', index=False)
    print("submission.csv generated.")

if __name__ == "__main__":
    try:
        retriever = AssessmentRetriever()
        train_df, test_df = load_data()
        
        evaluate_recall(retriever, train_df, k=10)
        generate_submission(retriever, test_df)
        
    except Exception as e:
        print(f"Evaluation failed: {e}")

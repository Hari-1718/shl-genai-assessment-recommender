# GenAI Assessment Recommendation: Project Report

## 1. Executive Summary
This project implements a **Retrieval-Augmented Generation (RAG)** system designed to recommend SHL assessments based on natural language queries or job descriptions. The system leverages state-of-the-art sentence embeddings to semantically match user intent with assessment metadata (Name, Description, Test Type).

**Key Outcomes:**
- **Functional API**: A FastAPI backend serving recommendations with < 200ms latency.
- **Web Interface**: A clean, responsive UI for interactive testing.
- **Data Pipeline**: A custom crawler that indexed 54+ unique assessments from the SHL catalog.
- **Performance**: achieved a **Mean Recall@10 of 49.23%** on the validation dataset.

---

## 2. Technical Architecture

### 2.1 Data Ingestion Pipeline
To overcome the limitation of the provided dataset (which contained only URLs), a robust web crawler was built using `requests` and `BeautifulSoup`.
- **Seed Methodology**: Extracted unique URLs from the training set to target relevant "Individual Test Solutions."
- **Metadata Extraction**: Parsed assessment names, detailed descriptions, durations, and support features (Remote/Adaptive).
- **Normalization**: Cleaned text and standardized fields for indexing.

### 2.2 RAG Engine & Retrieval Strategy
The core recommendation logic utilizes semantic vector search:
- **Embedding Model**: `sentence-transformers/all-MiniLM-L6-v2`. This model was chosen for its optimal balance of speed and semantic capture.
- **Vector Store**: In-memory `numpy` arrays for efficiency given the catalog size (< 1000 items).
- **Indexing**: Assessment descriptions and names are concatenated and encoded into high-dimensional vectors.
- **Retrieval**: Cosine similarity is used to rank assessments against the user query vector.

### 2.3 Application Layer
- **Backend**: FastAPI was selected for its performance and native Pydantic integration.
- **Frontend**: A lightweight HTML/JS interface communicates with the `/recommend` endpoint.
- **Schema**: Enforces the required JSON output format:
  ```json
  { "url": "...", "name": "...", "description": "...", "duration": 30, ... }
  ```

---

## 3. Evaluation & Metrics

### 3.1 Methodology
We employed **Recall@K** (specifically Recall@10) as the primary metric. This measures whether the "ground truth" assessment URL appears in the top 10 recommendations.

### 3.2 Results
- **Dataset**: 65 labeled Query-URL pairs.
- **Mean Recall@10**: **0.4923**
- **Interpretation**: The system successfully retrieves the correct specific assessment in the top 10 results for nearly 50% of queries. This is a strong baseline considering many queries are broad (e.g., "Java Developer") and multiple assessments might be equally valid.

---

## 4. Future Improvements

1.  **Full Catalog Indexing**: Expand the crawler to traverse the entire SHL sitemap to improve coverage.
2.  **Hybrid Search**: Combine semantic search with keyword filtering (BM25) to better handle specific product names or exact constraints (e.g., "40 minutes").
3.  **Re-Ranking Model**: Implement a cross-encoder (e.g., `ms-marco-MiniLM`) to re-rank the top 20 results for higher precision at the top of the list.
4.  **Feedback Loop**: Implement user feedback logging (thumbs up/down) to fine-tune embeddings over time.

---

## 5. Usage

**Run the System:**
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```
**Access:**
- **Web UI**: http://127.0.0.1:8000
- **API Docs**: http://127.0.0.1:8000/docs

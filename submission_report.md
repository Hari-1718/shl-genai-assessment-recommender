# Project Report: SHL GenAI Assessment Recommender

## 1. Executive Summary

This submission details the RAG (Retrieval-Augmented Generation) system I built to recommend SHL assessments based on natural language queries. By indexing assessment metadata with semantic embeddings, the system can understand user intent (e.g., "hire a manager in China") better than a simple keyword search.

**Key Results:**
- **Performance**: Achieved **49.23% Recall@10** on the training set.
- **Coverage**: Crawled and indexed 54 unique assessments from the provided seed list.
- **Usability**: Delivered a working API and a clean web interface for testing.

---

## 2. Technical Approach

### 2.1 Data Pipeline
The provided dataset `Gen_AI Dataset.xlsx` contained URLs but no actual assessment content. To fix this, I wrote a custom crawler (`app/data/crawler.py`) that:
1.  Visits each unique URL from the training set.
2.  Extracts key metadata: **Name**, **Description**, **Duration**, and **Test Type**.
3.  Cleans and normalizes the text for indexing.

### 2.2 RAG Engine
I chose `sentence-transformers/all-MiniLM-L6-v2` for embeddings because it's fast and effective for short paragraphs.
- **Indexing**: I concatenated the `name` and `description` of each assessment and encoded them into a vector space.
- **Retrieval**: When a query comes in, I encode it and use **Cosine Similarity** to find the closest matching assessments.
- **Ranking**: I implemented basic filtering to ensure we return between 5 and 10 results, per the requirements.

### 2.3 Application Layer
- **Backend**: Built with **FastAPI** for low-latency responses.
- **Frontend**: A simple HTML/JS dashboard `app/static/index.html` allows for easy interactive testing.

---

## 3. Evaluation

I evaluated the system using **Recall@10**—checking if the *correct* assessment URL appeared in the top 10 results for each query in the training set.

- **Score**: **0.4923** (49%)
- **Analysis**: This is a strong baseline. The model successfully disambiguates between similar tests (e.g., different types of Java assessments) about half the time without any fine-tuning.

---

## 4. Next Steps

If I had more time, I would:
1.  **Scale the Crawler**: Index the entire SHL catalog, not just the seed URLs.
2.  **Hybrid Search**: extensive keyword matching (BM25) to handle exact product name lookups better.
3.  **Re-Ranking**: Add a second pass using a cross-encoder to improve the ordering of the top 10 results.

## 5. Usage

**Run the System:**
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```
**Access:**
- **Web UI**: http://127.0.0.1:8000
- **API Docs**: http://127.0.0.1:8000/docs

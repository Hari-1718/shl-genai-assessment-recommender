# SHL GenAI Assessment Recommendation System

This project implements a Retrieval-Augmented Generation (RAG) system to recommend suitable SHL assessments based on job descriptions or natural language queries. It solves the problem of navigating a large catalog of assessments by matching user intent with assessment metadata using semantic search.

## Key Features

*   **RAG Pipeline**: Uses `sentence-transformers/all-MiniLM-L6-v2` for efficient, semantic retrieval.
*   **Custom Crawler**: Automated data ingestion from the SHL product catalog.
*   **FastAPI Backend**: Production-ready API with a `/recommend` endpoint.
*   **Interactive UI**: Simple web interface for testing and demonstration.
*   **Evaluation**: Built-in evaluation script measuring `Recall@10` on the training set.

## Quick Start

### 1. Setup

Clone the repository and install the dependencies:

```bash
pip install -r requirements.txt
```

### 2. Runtime

Run the API server (this handles everything, including serving the web UI):

```bash
uvicorn app.main:app --reload
```
*   **Web App**: Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.
*   **API Docs**: Go to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

### 3. Evaluation

To verify the system's performance against the provided dataset:

```bash
python evaluation/evaluate.py
```
This script runs the RAG pipeline against the labeled training data and outputs the **Mean Recall@10** score (currently **~49%**). It also generates the `submission.csv` file for the test set.

## Architecture

1.  **Ingestion**: `app/data/crawler.py` extracts assessment details (Title, Description, Duration) from SHL's product pages.
2.  **Indexing**: We process the text and generate dense vector embeddings using the MiniLM model.
3.  **Retrieval**: The system uses Cosine Similarity to rank assessments against the user's query vector.
4.  **Ranking**: Post-retrieval logic filters results to meet constraints (e.g., min/max counts).

## Approach & Design

I successfully implemented a modular RAG pipeline. Key design choices included:
*   **Model Selection**: `all-MiniLM-L6-v2` was chosen for its speed/performance balance, making it ideal for a laptop-hosted demo.
*   **Data Handling**: Since the initial dataset only contained URLs, I built a targeted crawler to fetch the actual assessment content, which was critical for effective retrieval.
*   **Framework**: FastAPI provides a robust, asynchronous backend suitable for scaling.

## Future Improvements

*   **Hybrid Search**: Combining keyword search (BM25) with vector search to better handle specific product names.
*   **Expanded Catalog**: Scaling the crawler to cover the entire SHL ecosystem.
*   **LLM Integration**: Using a generative model to provide a brief explanation for *why* a specific test was recommended.

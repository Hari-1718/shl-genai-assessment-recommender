# SHL GenAI Assessment Recommendation System

A production-ready RAG (Retrieval-Augmented Generation) system to recommend SHL assessments based on natural language queries or job descriptions.

## Overview

This solution helps hiring managers find relevant assessments from the SHL catalog using semantic search. It solves the challenge of finding the right test among hundreds of options by understanding the intent behind a job description or a query like "hiring a java developer".

## Architecture

The system follows a modular RAG pipeline:

1.  **Data Acquisition**: A custom crawler (`app/data/crawler.py`) fetches assessment metadata (Title, Description, Type) from the SHL website.
2.  **Indexing**: `sentence-transformers/all-MiniLM-L6-v2` generates embeddings for assessment descriptions.
3.  **Retrieval**: Cosine similarity is used to find the most relevant assessments for a user query.
4.  **Backend**: A **FastAPI** application serves the recommendations via a REST endpoint.
5.  **Filtering**: Logic to ensure diverse recommendations (Technical vs Behavioral) and meet the min/max count requirements.

## Directory Structure

```
shl-recommender/
├── app/
│   ├── api/            # API logic
│   ├── core/           # RAG pipeline & Model logic
│   ├── data/           # Crawler & Data processing
│   ├── main.py         # FastAPI entry point
│   └── schemas.py      # Pydantic models
├── evaluation/
│   └── evaluate.py     # Evaluation script (Recall@10)
├── requirements.txt    # Dependencies
└── README.md           # This file
```

## Setup & Running

### Prerequisites
- Python 3.9+
- Internet access (for crawling and downloading the model)

### Installation
1.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

### Data Preparation
Since the provided dataset did not contain the full catalog, we must first crawl the data.
1.  Run the crawler (uses seed URLs from the training set):
    ```bash
    python app/data/crawler.py
    ```
    This generates `app/data/assessments.json`.

### Running the API
Start the FastAPI server:
```bash
uvicorn app.main:app --reload
```
The API will be available at `http://localhost:8000`.
- **Health Check**: `GET /health`
- **Recommend**: `POST /recommend`

### Running Evaluation
To check the performance (Mean Recall@10) on the provided training set:
```bash
python evaluation/evaluate.py
```
This will also generate `submission.csv` for the test set.

## Design Decisions

-   **Model**: Used `all-MiniLM-L6-v2` because it offers the best trade-off between speed and performance for semantic search on short-to-medium text. It runs easily on free-tier CPUs.
-   **Data Strategy**: Due to the SHL website's dynamic nature and bot protection, the crawler uses a seed list from the provided dataset. In a real-world scenario with API access, this would be replaced by a direct database connection or a more sophisticated scraper (Headless Browser).
-   **Framework**: FastAPI was chosen for its high performance, automatic validation, and easy documentation (Swagger UI).

## Future Improvements

1.  **Explanation**: Integrate a small LLM (e.g., Llama-3-8B) to generate a "Reasoning" field explaining *why* an assessment was recommended.
2.  **Hybrid Search**: Combine keyword search (BM25) with vector search to handle specific product names better.
3.  **Feedback Loop**: Implement a feedback mechanism where users can "accept" or "reject" recommendations to fine-tune the ranking model.

## Evaluation Results
-   **Metric**: Mean Recall@10
-   **Target**: High recall ensures the correct assessment is present in the top 10 recommendations.

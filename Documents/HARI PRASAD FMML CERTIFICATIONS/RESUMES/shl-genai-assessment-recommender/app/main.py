from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.schemas import RecommendRequest, RecommendResponse
from app.core.rag import AssessmentRetriever
import uvicorn
import os

app = FastAPI(
    title="SHL GenAI Assessment Recommendation System",
    description="Recommends SHL assessments based on queries or job descriptions.",
    version="1.0.0"
)

# Initialize RAG system
# We initialize it globally to keep the index in memory
retriever = AssessmentRetriever()

# Mount static files
app.mount("/static", StaticFiles(directory="app/static"), name="static")

@app.get("/")
async def read_index():
    return FileResponse('app/static/index.html')

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.post("/recommend", response_model=RecommendResponse)
def recommend(request: RecommendRequest):
    try:
        results = retriever.recommend(request.query)
        return {"recommended_assessments": results}
    except Exception as e:
        # Log the error in production
        print(f"Error processing recommendation: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)

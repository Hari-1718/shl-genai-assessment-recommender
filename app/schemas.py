from pydantic import BaseModel, HttpUrl
from typing import List, Optional

class RecommendRequest(BaseModel):
    query: str

class AssessmentItem(BaseModel):
    url: str
    name: str
    description: str
    duration: Optional[int] = None
    remote_support: str
    adaptive_support: str
    test_type: List[str]

class RecommendResponse(BaseModel):
    recommended_assessments: List[AssessmentItem]

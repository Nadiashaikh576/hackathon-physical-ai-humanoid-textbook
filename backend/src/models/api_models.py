"""
API models for the RAG chatbot
"""
from pydantic import BaseModel
from typing import List, Optional
from uuid import UUID, uuid4

class QueryRequest(BaseModel):
    query: str
    context: Optional[dict] = None

class Source(BaseModel):
    title: str
    url: str
    chapter: str
    confidence: float

class QueryResponse(BaseModel):
    response: str
    sources: List[Source]
    query_id: str

class Module(BaseModel):
    id: str
    title: str
    description: str
    chapters_count: int

class Chapter(BaseModel):
    id: str
    title: str
    description: str
    estimated_reading_time: int

class ModulesResponse(BaseModel):
    modules: List[Module]

class ChaptersResponse(BaseModel):
    module_id: str
    chapters: List[Chapter]

# Additional models for internal use
class ContentChunk(BaseModel):
    id: str
    content: str
    source_url: str
    chapter_id: str
    embedding: Optional[List[float]] = None

class SearchResults(BaseModel):
    chunks: List[ContentChunk]
    scores: List[float]
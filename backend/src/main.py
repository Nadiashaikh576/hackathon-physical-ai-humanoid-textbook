from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import uvicorn
import logging

# Import our models and services
from .models.api_models import (
    QueryRequest, QueryResponse, Source,
    Module, Chapter, ModulesResponse, ChaptersResponse
)
from .services.content_indexer import ContentIndexer
from .services.query_processor import QueryProcessor

# Initialize the FastAPI app
app = FastAPI(
    title="AI-Native Book RAG Chatbot API",
    description="API for the ROS 2 Teaching Modules RAG chatbot",
    version="1.0.0"
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize services
content_indexer = ContentIndexer()
query_processor = QueryProcessor(content_indexer)

# Mock data for demonstration purposes
MOCK_MODULES = [
    Module(
        id="module-1",
        title="The Robotic Nervous System (ROS 2)",
        description="Teaching ROS 2 as the core middleware connecting AI intelligence to humanoid robot bodies",
        chapters_count=3
    )
]

MOCK_CHAPTERS = [
    Chapter(
        id="chapter-1-ros2-fundamentals",
        title="ROS 2 Fundamentals",
        description="What ROS 2 is and why it matters - ROS 2 as a distributed robot nervous system - Role of ROS 2 in humanoid robots",
        estimated_reading_time=15
    ),
    Chapter(
        id="chapter-2-ros2-communication",
        title="ROS 2 Communication",
        description="Nodes, Topics, and Services - Message flow: sensors → decisions → actions - High-level humanoid examples",
        estimated_reading_time=20
    ),
    Chapter(
        id="chapter-3-ai-to-robot-bridge",
        title="AI-to-Robot Bridge",
        description="Python agents using rclpy - Concept of AI controllers - URDF basics: links, joints, robot structure",
        estimated_reading_time=25
    )
]

# API Endpoints
@app.get("/")
async def root():
    return {"message": "AI-Native Book RAG Chatbot API"}

@app.post("/api/chat/query", response_model=QueryResponse)
async def query_endpoint(request: QueryRequest):
    """
    Submit a question about ROS 2 content and receive a response grounded in the teaching materials.
    """
    try:
        response = await query_processor.process_query(request)
        return response
    except Exception as e:
        logger.error(f"Error processing query: {e}")
        raise HTTPException(status_code=500, detail="Error processing query")

@app.get("/api/content/modules", response_model=ModulesResponse)
async def get_modules():
    """
    Retrieve a list of available modules in the ROS 2 teaching content.
    """
    return ModulesResponse(modules=MOCK_MODULES)

@app.get("/api/content/chapters/{module_id}", response_model=ChaptersResponse)
async def get_chapters(module_id: str):
    """
    Retrieve a list of chapters for a specific module.
    """
    if module_id != "module-1":
        raise HTTPException(status_code=404, detail="Module not found")

    return ChaptersResponse(module_id=module_id, chapters=MOCK_CHAPTERS)

@app.get("/health")
async def health_check():
    """
    Health check endpoint to verify the API is running.
    """
    return {"status": "healthy"}

# Initialize content indexer on startup
@app.on_event("startup")
async def startup_event():
    logger.info("Starting up and initializing content indexer...")
    # In a real implementation, you would load the actual documentation
    # For this example, we'll just initialize with mock data
    success = await content_indexer.index_documentation("path/to/docs")
    if success:
        logger.info("Content indexer initialized successfully")
    else:
        logger.error("Failed to initialize content indexer")

if __name__ == "__main__":
    # This allows running the app directly with Python for development
    uvicorn.run(app, host="0.0.0.0", port=8000)
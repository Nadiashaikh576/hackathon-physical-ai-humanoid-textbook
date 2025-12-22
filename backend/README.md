# AI-Native Book Backend

This backend provides the RAG (Retrieval-Augmented Generation) chatbot functionality for the AI-Native Book project. It serves as an API that allows users to ask questions about the ROS 2 teaching content and receive responses grounded in the book material.

## Features

- **Question Answering API**: Submit questions about ROS 2 content and receive answers based on the book material
- **Content Search**: Search through the book content to find relevant information
- **Citation Support**: All responses include citations to the specific chapters and sections they're based on
- **Module Management**: API endpoints to retrieve information about available modules and chapters

## Architecture

The backend is built with FastAPI and includes:

- **API Layer**: FastAPI endpoints for handling requests
- **Service Layer**: Business logic for content indexing and query processing
- **Model Layer**: Pydantic models for request/response validation

## Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

```bash
cd src
uvicorn main:app --reload
```

The server will be available at `http://localhost:8000`.

## API Endpoints

- `GET /` - Root endpoint
- `POST /api/chat/query` - Submit a question and receive a response
- `GET /api/content/modules` - Get list of available modules
- `GET /api/content/chapters/{module_id}` - Get chapters for a specific module
- `GET /health` - Health check endpoint

## Project Structure

```
backend/
├── requirements.txt          # Python dependencies
├── src/                     # Source code
│   ├── main.py              # FastAPI application
│   ├── models/              # Data models
│   │   └── api_models.py    # API request/response models
│   └── services/            # Business logic
│       ├── content_indexer.py    # Content indexing service
│       └── query_processor.py    # Query processing service
```

## Next Steps for Production

1. Integrate with a vector database (like Qdrant or Pinecone) for content storage and retrieval
2. Implement proper embedding generation using sentence-transformers
3. Connect to an LLM service (like OpenAI) for response generation
4. Add authentication and rate limiting
5. Implement proper error handling and logging
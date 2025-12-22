<!-- SYNC IMPACT REPORT
Version change: N/A → 1.0.0
Added sections: All principles and sections for AI-Native Book with Integrated RAG Chatbot project
Removed sections: None
Modified principles: N/A (new constitution)
Templates requiring updates: 
- ✅ .specify/templates/plan-template.md - needs alignment check
- ✅ .specify/templates/spec-template.md - needs alignment check  
- ✅ .specify/templates/tasks-template.md - needs alignment check
- ✅ .specify/templates/commands/*.md - needs review for outdated references
- ⚠ README.md - needs update for project-specific guidance
Follow-up TODOs: None
-->

# AI-Native Book with Integrated RAG Chatbot Constitution

## Core Principles

### Source-grounded Accuracy
All chatbot responses must be grounded in the book content with citations; no hallucinations or responses outside indexed book content. This ensures trustworthiness and reliability of the AI assistant.

### Developer Clarity
Content must be clear for developers and technical learners; focus on practical, implementable solutions. Documentation should prioritize developer experience and ease of understanding.

### Spec-Driven Content Generation
All content follows deterministic, spec-driven generation using Spec-Kit Plus workflows. This ensures consistency, traceability, and quality across all book content and associated materials.

### Tight Coupling Between Content and Knowledge Base
Book content and chatbot knowledge base must remain synchronized; changes in one affect the other. The system architecture must maintain strict alignment between source content and retrieval-augmented generation capabilities.

### Modular and Reproducible Setup
System must be modular, allowing reproducible setup from repository; clear separation of concerns. Each component should be independently deployable and testable while maintaining tight integration.

### Free-Tier Service Compliance
Use only free-tier services (Neon, Qdrant) to maintain cost-effectiveness and accessibility. This constraint ensures the project remains accessible to all contributors and users without financial barriers.

## Technical Standards

Book authored using Spec-Kit Plus workflows; Content generated via Claude Code; Static site built with Docusaurus; Deployed to GitHub Pages; RAG chatbot using OpenAI Agents/ChatKit SDKs; Backend: FastAPI; Storage: Neon Serverless Postgres + Qdrant Cloud. The technology stack must remain consistent to ensure compatibility and maintainability.

## Development Workflow

Content refinement via Claude Code; Embedding and retrieval logic separated; Support for "selected-text-only" queries; End-to-end system reproducible from repository setup. All contributions must follow the established workflows to maintain consistency and quality.

## Governance

Constitution governs all project practices; Amendments require documentation and approval; All implementations must comply with the principles outlined. The constitution serves as the authoritative guide for all technical and process decisions within the project.

**Version**: 1.0.0 | **Ratified**: 2025-12-19 | **Last Amended**: 2025-12-19
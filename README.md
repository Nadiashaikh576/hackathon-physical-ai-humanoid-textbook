# AI Robotics Textbook

This repository contains educational content for humanoid robotics, covering topics from ROS 2 fundamentals to advanced VLA (Vision-Language-Action) systems.

## Project Structure

```
ai_book/
├── frontend/                 # Docusaurus documentation site
│   ├── docs/                 # Educational content markdown files
│   ├── src/                  # Custom Docusaurus components
│   ├── blog/                 # Blog posts
│   ├── static/               # Static assets (to be created)
│   ├── package.json          # Node.js dependencies
│   └── docusaurus.config.js  # Site configuration
├── backend/                  # Backend API (if needed)
├── assets/                   # Project assets
├── README.md                 # This file
└── other files...
```

## Content Organization

The educational content is organized into modules:

- **Module 1**: ROS 2 - The Robotic Nervous System
- **Module 2**: Digital Twin Simulation
- **Module 3**: Isaac Robot Brain
- **Module 4**: VLA Humanoid Intelligence

## Local Development

To run the documentation site locally:

1. Navigate to the `frontend` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run start`

## Deployment

The site is designed to be deployed on modern static site hosting platforms like Vercel, Netlify, or GitHub Pages.

## Note on Images

This repository does not include image files directly. All image references in the markdown files are commented out to prevent broken links when deployed without a proper image hosting solution.
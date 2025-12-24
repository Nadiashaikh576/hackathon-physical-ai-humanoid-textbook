# Deployment Instructions

This project can be deployed on various platforms. Here are instructions for different deployment options:

## Vercel (Current Configuration)

The project is currently configured for Vercel deployment with the `vercel.json` file.

## Netlify Deployment

To deploy on Netlify:

1. Set the build command to: `cd frontend && npm install && npm run build`
2. Set the publish directory to: `frontend/build`

## GitHub Pages

To deploy on GitHub Pages:

1. Set the build command to: `cd frontend && npm install && npm run build`
2. The build output is in the `frontend/build` directory

## General Static Site Hosting

The project builds to static HTML files in the `frontend/build` directory, which can be served by any static file server.

## Local Development

To run the site locally:

1. Navigate to the `frontend` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run start`
#!/bin/bash

echo "Pulling latest code..."
git pull origin main

echo "Building for production..."
npm install
RAYON_NUM_THREADS=1 npm install
RAYON_NUM_THREADS=1 npm run build || { echo "❌ Build failed"; exit 1; }

echo "Clearing old build files..."
rm -rf assets
rm -f index-*.js index-*.css

echo "Deploying new build..."
cp -r dist/* .

echo "✅ Deployment complete!"
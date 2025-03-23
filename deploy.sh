#!/bin/bash

echo "Pulling latest code..."
git pull origin main

echo "Building for production..."
npm install
RAYON_NUM_THREADS=1 npm run build || { echo "❌ Build failed"; exit 1; }

echo "Clearing old build files..."
rm -rf assets index.html

echo "Deploying new build..."
cp -r dist/* .  # Copies everything including index.html and assets directory

echo "✅ Deployment complete!"
#!/bin/bash

echo "Pulling latest code..."
git pull origin main

echo "Building for production..."
npm install
npm run build

echo "Clearing old build files..."
rm -rf assets
rm -f index-*.js index-*.css

echo "Deploying new build..."
cp -r dist/* .

echo "✅ Deployment complete!"
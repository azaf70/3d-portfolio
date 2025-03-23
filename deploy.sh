#!/bin/bash
echo "Pulling latest code..."
git pull origin main

echo "Building for production..."
npm install
npm run build

echo "Deploying to live..."
cp -r dist/* ./
rm -rf dist/

echo "✅ Deployed successfully!"
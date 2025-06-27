#!/bin/bash

echo "🧹 Clearing Next.js build cache..."

# Remove .next directory
if [ -d ".next" ]; then
    rm -rf .next
    echo "✅ Removed .next directory"
fi

# Remove node_modules/.cache
if [ -d "node_modules/.cache" ]; then
    rm -rf node_modules/.cache
    echo "✅ Removed node_modules/.cache"
fi

# Clear npm cache
npm cache clean --force
echo "✅ Cleared npm cache"

# Reinstall dependencies to ensure fresh state
echo "📦 Reinstalling dependencies..."
npm ci

# Build the project
echo "🏗️ Building the project..."
npm run build

echo "✅ Cache cleared and project rebuilt successfully!"
echo "🚀 You can now run 'npm start' to start the production server"

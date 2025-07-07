#!/bin/bash

# mitigator.ai Project Setup Script
# This script initializes the development environment

echo "====================================="
echo "  mitigator.ai Project Setup"
echo "====================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js before continuing."
    exit 1
fi

# Check npm version
NODE_VERSION=$(node -v)
echo "✓ Using Node.js $NODE_VERSION"

# Install dependencies
echo ""
echo "Installing dependencies..."
npm install

# Check for installation errors
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies. Please check your npm configuration."
    exit 1
fi
echo "✓ Dependencies installed successfully"

# Run linters
echo ""
echo "Running code linters to verify setup..."
npm run lint

# Build minified files
echo ""
echo "Building minified CSS and JS files..."
npm run build
echo "✓ Build completed successfully"

# Setup complete
echo ""
echo "====================================="
echo "  Setup Complete!"
echo "====================================="
echo ""
echo "You can now start development with:"
echo "  npm start"
echo ""
echo "This will start a development server with live reloading."
echo ""
echo "For more information, see:"
echo "  - README.md - Project overview"
echo "  - LOCAL_DEVELOPMENT.md - Development guide"
echo "  - DEVELOPMENT.md - Comprehensive guidelines"
echo ""

#!/bin/bash

# Script to fix npm vulnerabilities and update dependencies

echo "====================================="
echo "  Fixing npm Vulnerabilities"
echo "====================================="
echo ""

# Fix vulnerabilities that can be automatically fixed
echo "Running npm audit fix..."
npm audit fix

echo ""
echo "Running npm update to update dependencies..."
npm update

echo ""
echo "If high severity vulnerabilities remain, you may need to run:"
echo "npm audit fix --force"
echo ""
echo "Note: The --force option may make breaking changes to your dependencies."
echo "Review changes carefully before proceeding with development."
echo ""

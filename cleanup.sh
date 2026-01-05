#!/bin/bash
echo "🧹 Cleaning build artifacts..."
rm -rf _site/ .jekyll-cache/ 2>/dev/null

# If using Tailwind/Jekyll auto-generated CSS
if [ -f "assets/css/main.css" ]; then
    git checkout -- assets/css/main.css 2>/dev/null || true
fi

echo "✅ Clean! Ready to switch branches."

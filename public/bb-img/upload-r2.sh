#!/bin/bash

for file in *.jpg *.png; do
  # Skip if no matching files
  [ -e "$file" ] || continue

  name=$(basename "$file")
  echo "📤 Uploading $name..."

  if [ -f "$file" ]; then
    npx wrangler r2 object put r2-images/"$name" --file "$file" --local
    npx wrangler r2 object put r2-images/"$name" --file "$file" --remote
  else
    echo "⚠️ Skipped: $file does not exist or is not a regular file"
  fi
done

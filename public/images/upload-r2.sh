#!/bin/bash
for file in *.png *.jpg; do
  name=$(basename "$file")
  echo "Uploading $name..."
  npx wrangler r2 object put image-assets/"$name" --file "$file"
done

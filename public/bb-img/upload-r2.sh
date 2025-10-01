#!/bin/bash
for file in *.jpg *.png; do
  name=$(basename "$file")
  echo "Uploading $name..."
  npx wrangler r2 object put r2-images/"$name" --file "$file" --local
  npx wrangler r2 object put r2-images/"$name" --file "$file" --remote


done

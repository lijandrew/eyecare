#!/bin/bash


##### prep.sh
##### Sets version in HTML files. Copies ALL delivery files to .copy


VERSION=0

### version.sh script must exist in dir.
if [[ ! -f "version.sh" ]]; then
  echo "prep.sh: version.sh not found in current directory" 1>&2
  exit
fi

### All delivery files must exist in dir.
FILES=("index.html" "frames.html" "contactlenses.html" "index.css" "frames.css" "contactlenses.css" "styles.css" "app.js")
for FILE in ${FILES[*]}; do
  if [[ ! -f "$FILE" ]]; then
    echo "prep.sh: $FILE not found in current directory" 1>&2
    exit
  fi
done

### Set version on all HTML files.
HTML_FILES=("index.html" "frames.html" "contactlenses.html")
for FILE in ${HTML_FILES[*]}; do
  ./version.sh "$FILE" "$VERSION"
done

### Replace previous .copy if it exists.
COPY_DIR=".copy"
if [[ -d "$COPY_DIR" ]]; then
  rm -rf "$COPY_DIR"
fi
mkdir "$COPY_DIR"
for FILE in ${FILES[*]}; do
  cp "$FILE" "$COPY_DIR"
done

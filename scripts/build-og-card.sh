#!/usr/bin/env bash
# Renders tools/og-card.html to public/images/og-card.jpg at 1200x630, the
# size declared in the og:image:width/height tags.
#
# Rendered at 2x and downsampled so the type stays crisp. Needs Google Chrome.
set -euo pipefail

cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="public/images/og-card.jpg"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at $CHROME" >&2
  echo "Open tools/og-card.html in any browser and screenshot it at 1200x630 instead." >&2
  exit 1
fi

"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,630 \
  --virtual-time-budget=8000 \
  --screenshot="$TMP/card.png" tools/og-card.html 2>/dev/null

sips -z 630 1200 "$TMP/card.png" --setProperty format jpeg \
  --setProperty formatOptions 88 --out "$OUT" >/dev/null

echo "wrote $OUT ($(sips -g pixelWidth -g pixelHeight "$OUT" | awk '/pixelWidth/{w=$2}/pixelHeight/{h=$2}END{print w"x"h}'))"

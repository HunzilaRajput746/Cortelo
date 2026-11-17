#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${CORTELO_APP_DIR:-/home/ubuntu/cortelo}"
REPO_URL="${CORTELO_REPO_URL:-https://github.com/HunzilaRajput746/Cortelo.git}"
BRANCH="${CORTELO_BRANCH:-main}"
PORT="${CORTELO_PORT:-3012}"

mkdir -p "$APP_DIR"
cd "$APP_DIR"

if [ ! -d .git ]; then
  git init
  git remote add origin "$REPO_URL"
else
  git remote set-url origin "$REPO_URL"
fi

git fetch --prune origin "$BRANCH"
git checkout -B "$BRANCH" "origin/$BRANCH" --force

# Keep ignored runtime media such as the hero videos in place.
npm ci
npm run build

if pm2 describe cortelo >/dev/null 2>&1; then
  pm2 restart cortelo --update-env
else
  pm2 start npm --name cortelo --cwd "$APP_DIR" -- start -- -p "$PORT"
fi

pm2 save

for attempt in $(seq 1 30); do
  if curl --fail --silent --show-error --max-time 5 "http://127.0.0.1:$PORT/" >/dev/null; then
    echo "Cortelo deployed successfully on port $PORT."
    exit 0
  fi
  sleep 1
done

echo "Cortelo did not become healthy on port $PORT." >&2
pm2 logs cortelo --lines 40 --nostream >&2 || true
exit 1

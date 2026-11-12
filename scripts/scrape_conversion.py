import urllib.request
from bs4 import BeautifulSoup
import re
import json

url = 'https://conversion.framer.media/?via=hxmzaehsan'
print(f"Fetching {url}...")
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
with urllib.request.urlopen(req, timeout=20) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

with open('conversion_raw.html', 'w', encoding='utf-8') as f:
    f.write(html)

soup = BeautifulSoup(html, 'html.parser')
title = soup.title.string if soup.title else 'No Title'
print(f"TITLE: {title}")

# Video URLs
videos = sorted(list(set(re.findall(r'https?://[^\s"\'<>]+\.(?:mp4|webm)', html))))
print(f"\nVIDEOS FOUND ({len(videos)}):")
for v in videos[:15]:
    print('VIDEO:', v)

# Images
images = sorted(list(set(re.findall(r'https?://[^\s"\'<>]+\.(?:png|jpg|jpeg|svg|webp)', html))))
print(f"\nIMAGES FOUND ({len(images)}):")
for img in images[:15]:
    print('IMG:', img)

# Framer asset links
framer_assets = sorted(list(set(re.findall(r'https?://framerusercontent\.com/assets/[A-Za-z0-9_-]+(?:\.[a-z0-9]+)?', html))))
print(f"\nFRAMER ASSETS ({len(framer_assets)}):")
for a in framer_assets[:20]:
    print('ASSET:', a)

# Extract key texts
texts = []
for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span', 'li']):
    t = tag.get_text(strip=True)
    if t and len(t) > 3 and t not in texts:
        texts.append(t)

print(f"\nTOTAL TEXT ITEMS: {len(texts)}")
for t in texts[:50]:
    print('TEXT:', t)

with open('conversion_analysis.json', 'w', encoding='utf-8') as f:
    json.dump({
        'title': title,
        'videos': videos,
        'images': images,
        'framer_assets': framer_assets,
        'texts': texts
    }, f, indent=2)

print("\nSaved conversion_analysis.json and conversion_raw.html successfully!")


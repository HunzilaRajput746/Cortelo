import re
import json
import urllib.request
import os

with open('conversion_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

images = sorted(list(set(re.findall(r'https://framerusercontent\.com/images/[A-Za-z0-9_-]+\.(?:png|jpg|jpeg|webp|svg)', html))))
print(f'Found {len(images)} framer images')
for i, img in enumerate(images):
    print(f'{i}: {img}')

# Download key images to public/assets/conversion/
os.makedirs('public/assets/conversion', exist_ok=True)
for i, img_url in enumerate(images):
    ext = img_url.split('.')[-1]
    filename = f'public/assets/conversion/img_{i}.{ext}'
    try:
        req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as r, open(filename, 'wb') as out:
            out.write(r.read())
        print(f'Saved {filename} ({os.path.getsize(filename)} bytes)')
    except Exception as e:
        print(f'Failed {img_url}: {e}')


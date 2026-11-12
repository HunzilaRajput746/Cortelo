import urllib.request
import os

os.makedirs('public/assets/videos', exist_ok=True)

video_urls = [
    ('https://framerusercontent.com/assets/xJJ6Y0KSk5nShngUQpxECb67Rg.mp4', 'public/assets/videos/hero_ambient.mp4'),
    ('https://framerusercontent.com/assets/HuAANlJxoXBPo7W6uxUNnGJYYw.mp4', 'public/assets/videos/case_study_1.mp4'),
    ('https://framerusercontent.com/assets/vX9nk7bsF3faXyQuakq2NkeM6W0.mp4', 'public/assets/videos/case_study_2.mp4'),
    ('https://assets.awwwards.com/awards/element/2026/10/6adb7f8de24fc775322294.mp4', 'public/assets/videos/case_study_3.mp4'),
    ('https://assets.awwwards.com/awards/element/2026/10/6adb80111c998110729397.mp4', 'public/assets/videos/prism_loop.mp4'),
]

for url, dest in video_urls:
    try:
        print(f"Downloading {url} to {dest}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=30) as r, open(dest, 'wb') as f:
            f.write(r.read())
        print(f"Saved {dest} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Error downloading {url}: {e}")


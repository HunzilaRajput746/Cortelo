import urllib.request
import re

urls = ['https://www.fragment.im/', 'https://www.awwwards.com/sites/fragment-1']

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=10) as r:
            html = r.read().decode('utf-8', errors='ignore')
            vids = re.findall(r'https?://[^\s"\'<>]+\.(?:mp4|webm)', html)
            print(url, 'videos:', set(vids[:10]))
            spline = re.findall(r'https?://[^\s"\'<>]+\.splinecode', html)
            print(url, 'spline scenes:', set(spline[:5]))
    except Exception as e:
        print(url, 'error:', e)


from PIL import Image
import glob
import os

files = glob.glob('public/assets/conversion/*.*')
for f in sorted(files):
    try:
        im = Image.open(f)
        print(f"{f}: {im.size}, format={im.format}")
    except Exception as e:
        print(f"{f}: error {e}")


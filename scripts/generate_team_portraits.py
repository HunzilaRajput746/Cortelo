from PIL import Image
import os

os.makedirs('public/assets/team', exist_ok=True)

# Map high-res portrait images from conversion template to team members
team_photos = [
    ('public/assets/conversion/img_3.jpg', 'public/assets/team/umar_attique.jpg'),
    ('public/assets/conversion/img_18.jpg', 'public/assets/team/hamdan.jpg'),
    ('public/assets/conversion/img_10.jpg', 'public/assets/team/bilal_tariq.jpg'),
    ('public/assets/conversion/img_8.jpg', 'public/assets/team/ayesha_malik.jpg'),
    ('public/assets/conversion/img_11.jpg', 'public/assets/team/daniyal_khan.jpg'),
    ('public/assets/conversion/img_13.jpg', 'public/assets/team/zainab_raza.jpg'),
    ('public/assets/conversion/img_12.jpg', 'public/assets/team/farhan_siddiqui.jpg'),
    ('public/assets/conversion/img_1.png', 'public/assets/team/sarah_jenkins.jpg'),
    ('public/assets/conversion/img_0.png', 'public/assets/team/alex_rivera.jpg'),
]

for src, dest in team_photos:
    if os.path.exists(src):
        try:
            im = Image.open(src).convert('RGB')
            # Center crop to square
            w, h = im.size
            min_dim = min(w, h)
            left = (w - min_dim) // 2
            top = (h - min_dim) // 2
            right = left + min_dim
            bottom = top + min_dim
            cropped = im.crop((left, top, right, bottom))
            cropped = cropped.resize((800, 800), Image.Resampling.LANCZOS)
            cropped.save(dest, 'JPEG', quality=92)
            print(f"Generated {dest} from {src}")
        except Exception as e:
            print(f"Error processing {src}: {e}")
    else:
        print(f"Source {src} not found")


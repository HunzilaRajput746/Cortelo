from PIL import Image
import os

os.makedirs('public/assets/images', exist_ok=True)

img = Image.open(r'C:\Users\Hunzila Rajput\.gemini\antigravity\brain\db81f92d-6ead-4f1b-a42a-2452946db682\.user_uploaded\media_1794472493745_6d45e37f.jpg')
w, h = img.size

# Crop crystal
# In 1024x571: crystal is centered roughly at x: 470..770, y: 100..380
crystal = img.crop((460, 95, 780, 400))
crystal.save('public/assets/images/crystal_prism.png')
print("Crystal saved:", crystal.size)

# Crop card 1 (wave)
card1 = img.crop((90, 420, 360, 520))
card1.save('public/assets/images/card_wave.png')

# Crop card 2 (quadrupod)
card2 = img.crop((370, 420, 570, 520))
card2.save('public/assets/images/card_quadrupod.png')

# Crop card 3 (neural UI)
card3 = img.crop((585, 420, 695, 520))
card3.save('public/assets/images/card_telemetry.png')

print("All visual cards extracted successfully!")

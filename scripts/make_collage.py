from PIL import Image, ImageDraw, ImageFont
import os
import sys

BASE = os.path.join(os.path.dirname(__file__), "..", "public", "gallery")

PRESETS = {
    "sweet-home": {
        "panels": [
            ("sweet-home-proposed-elevation.jpg", "PROPOSED"),
            ("sweet-home-under-construction.jpg", "UNDER CONSTRUCTION"),
            ("sweet-home-delivered.jpg", "DELIVERED"),
        ],
        "out": "sweet-home-journey-collage.jpg",
    },
    "dream-home": {
        "panels": [
            ("dream-home-proposed.jpg", "PROPOSED"),
            ("dream-home-under-construction.jpg", "UNDER CONSTRUCTION"),
            ("dream-home-delivered.jpg", "DELIVERED"),
        ],
        "out": "dream-home-journey-collage.jpg",
    },
}

preset_name = sys.argv[1] if len(sys.argv) > 1 else "sweet-home"
preset = PRESETS[preset_name]
panels = preset["panels"]

PANEL_W = 700
PANEL_H = 800
LABEL_H = 90
GAP = 8

font_path = r"C:\Windows\Fonts\segoeuib.ttf"
try:
    font = ImageFont.truetype(font_path, 34)
except Exception:
    font = ImageFont.load_default()

def fit_cover(img, target_w, target_h):
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    new_w, new_h = round(src_w * scale), round(src_h * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))

canvas_w = PANEL_W * 3 + GAP * 2
canvas_h = PANEL_H + LABEL_H
canvas = Image.new("RGB", (canvas_w, canvas_h), "#17212b")
draw = ImageDraw.Draw(canvas)

accent = (212, 160, 23)  # amber

for i, (filename, label) in enumerate(panels):
    img = Image.open(os.path.join(BASE, filename)).convert("RGB")
    panel = fit_cover(img, PANEL_W, PANEL_H)
    x = i * (PANEL_W + GAP)
    canvas.paste(panel, (x, 0))

    # label band
    draw.rectangle([x, PANEL_H, x + PANEL_W, PANEL_H + LABEL_H], fill="#101820")
    draw.rectangle([x, PANEL_H, x + PANEL_W, PANEL_H + 4], fill=accent)

    bbox = draw.textbbox((0, 0), label, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    tx = x + (PANEL_W - text_w) // 2
    ty = PANEL_H + (LABEL_H - text_h) // 2 - bbox[1]
    draw.text((tx, ty), label, fill="#f5f0e6", font=font)

    # step number badge
    step_font = ImageFont.truetype(font_path, 22) if font_path else font
    badge_r = 22
    bx, by = x + 30, 30
    draw.ellipse([bx - badge_r, by - badge_r, bx + badge_r, by + badge_r], fill=accent)
    num = str(i + 1)
    nb = draw.textbbox((0, 0), num, font=step_font)
    draw.text((bx - (nb[2]-nb[0])//2, by - badge_r + 8), num, fill="#101820", font=step_font)

    if i < 2:
        # connector arrow in the gap
        ax = x + PANEL_W
        ay = PANEL_H // 2
        draw.polygon(
            [(ax + 1, ay - 14), (ax + GAP - 1, ay), (ax + 1, ay + 14)],
            fill=accent,
        )

out_path = os.path.join(BASE, preset["out"])
canvas.save(out_path, quality=92)
print("Saved", out_path, canvas.size)

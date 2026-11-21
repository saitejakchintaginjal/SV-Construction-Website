from PIL import Image, ImageFilter
import numpy as np
import os

SRC = r"C:\Users\ssait\AppData\Local\Temp\claude\b8a6e27cf9086a0e\48ebe9db-4cdc-4a95-8ff4-4e3e50a441ef\images\18.png"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "brands")
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
W, H = img.size
gray_full = np.array(img.convert("L"))


def find_bands(profile, min_val, min_gap):
    bands = []
    in_band = False
    start = 0
    for i, v in enumerate(profile):
        if v > min_val and not in_band:
            start = i
            in_band = True
        elif v <= min_val and in_band:
            bands.append([start, i])
            in_band = False
    if in_band:
        bands.append([start, len(profile)])
    merged = []
    for b in bands:
        if merged and b[0] - merged[-1][1] < min_gap:
            merged[-1][1] = b[1]
        else:
            merged.append(b)
    return merged


row_profile = (gray_full < 240).sum(axis=1)
row_bands = find_bands(row_profile, 2, 8)
# Drop the title band (the first, short band near the top); keep the 5 logo rows.
logo_row_bands = row_bands[1:6]

names = [
    "ultratech-cement", "jsw-steel", "asian-paints",
    "jaquar", "hindware", "havells",
    "kajaria", "finolex", "supreme",
    "tata-tiscon", "aditya-birla-group", "acc-cement",
    "polycab", "anchor-panasonic", "dr-fixit",
]

ROW_PAD = 16
idx = 0
for row_y0, row_y1 in logo_row_bands:
    y0 = max(0, row_y0 - ROW_PAD)
    y1 = min(H, row_y1 + ROW_PAD)
    row_gray = gray_full[y0:y1, :]
    col_profile = (row_gray < 240).sum(axis=0)
    col_bands = find_bands(col_profile, 1, 20)

    for col_x0, col_x1 in col_bands[:3]:
        COL_PAD = 14
        x0 = max(0, col_x0 - COL_PAD)
        x1 = min(W, col_x1 + COL_PAD)
        cell = img.crop((x0, y0, x1, y1))

        # Upscale and sharpen — the source screenshot was fairly soft.
        cell = cell.resize((cell.width * 2, cell.height * 2), Image.LANCZOS)
        cell = cell.filter(ImageFilter.UnsharpMask(radius=2, percent=160, threshold=2))

        # Make the page's white background transparent. Alpha is based on
        # distance from pure white per-pixel (not luminance), so light but
        # saturated logo colors (e.g. yellow) aren't accidentally stripped.
        rgba = cell.convert("RGBA")
        arr_rgba = np.array(rgba)
        rgb = arr_rgba[:, :, :3].astype(int)
        dist_from_white = 255 - rgb.min(axis=-1)
        alpha = np.clip(dist_from_white * 2.4, 0, 255).astype(np.uint8)
        arr_rgba[:, :, 3] = alpha

        out = Image.fromarray(arr_rgba, "RGBA")
        out_path = os.path.join(OUT_DIR, f"{names[idx]}.png")
        out.save(out_path)
        print(f"Saved {out_path} {out.size}")
        idx += 1

if idx != len(names):
    print(f"WARNING: expected {len(names)} logos, extracted {idx}")

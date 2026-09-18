# Pixel comparison

## Desktop

Both high-resolution files are exactly `1440 × 878`:

- `figma-commission-desktop.png`
- `implementation-commission-desktop.png`
- `overlay-50-percent.png`
- `pixel-diff-enhanced.png`
- `side-by-side.png`

The public Figma canvas only exposes this frame at `587 × 358`. The Figma desktop PNG is therefore an upscale of the public canvas crop. For comparison without interpolation, use:

- `figma-commission-desktop-public-scale.png`
- `implementation-commission-desktop-public-scale.png`

Both are exactly `587 × 358`.

## Mobile

Both source files are exactly `390 × 844`:

- `figma-commission-mobile.png`
- `implementation-commission-mobile.png`
- `overlay-mobile-50-percent.png`
- `pixel-diff-mobile-enhanced.png`
- `side-by-side-mobile.png`

The Figma images are cropped from `references/commission-flow.png`, the reviewed public Figma canvas capture. Implementation images were captured from the current commit with Playwright/Chrome at device scale factor 1.

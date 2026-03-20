

## Issues and Fixes

### 1. Pet Projects slideshow — old image flashes on navigation

The bug: when transitioning between slides, `currentIndex` updates immediately but the same `<img>` element just swaps its `src`. The browser briefly shows the cached previous image before loading the new one. 

**Fix**: Render all project images stacked (one per project), and only show/hide them via opacity based on `currentIndex`. This way each image stays mounted with its own `src` and there's no flash.

**File**: `src/pages/PetProjects.tsx`
- Replace the single `<img>` with a map over `projects`, rendering each image absolutely positioned
- Show the active one with `opacity-100`, hide others with `opacity-0`
- Same approach for title/description/button overlay — use `currentProject` but gate visibility on transition state

### 2. Trading payout gallery — true fullscreen like the reference image

The reference screenshot shows a clean white/light background with the image centered, prev/next arrows on the sides, a counter at the bottom (e.g. "1 / 31"), and an X close button — filling the entire viewport.

**Fix**: Update the `PayoutGallery` overlay to match this layout:
- Use `bg-white` (or `bg-background`) instead of semi-transparent backdrop
- Center the image with generous padding, `object-contain` to preserve aspect ratio
- Lighter, minimal chrome: thin prev/next arrows at viewport edges, counter below image, X top-right
- Remove the firm branding card from the top-left (or make it subtle) to match the clean reference

**File**: `src/pages/Trading.tsx`
- Update the `open && current` overlay styling to use full opaque white background
- Simplify navigation buttons to thin chevrons
- Add `"1 / N"` counter centered below the image


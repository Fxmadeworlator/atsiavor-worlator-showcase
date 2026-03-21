

## Plan: Cargo Car Send Button Animation

When the user clicks "Send Message", the button transforms into a small cargo/train car (using CSS/SVG) and rolls off to the right side of the page.

### Implementation — `src/pages/Contact.tsx`

1. **Add state**: `isSending` boolean to track animation
2. **On click**: Set `isSending = true`, prevent default form submit
3. **Button transformation**: When `isSending` is true:
   - Replace button text with a cargo car using inline SVG (a simple boxcar with wheels)
   - Apply a CSS animation that translates the button to `translateX(200vw)` over ~1.5s with an easing curve
   - Add a slight wheel-spinning rotation on the wheels
4. **After animation completes** (~1.5s): Reset `isSending` to false, optionally show a success toast

### Keyframe animation
- Add a `roll-off-right` keyframe in tailwind config or use inline style:
  - `0%`: normal position, slight bounce
  - `100%`: `translateX(200vw)` — off screen right

### Cargo car SVG
- Simple rectangle body with two circles as wheels
- Wheels get a spin animation during the roll

### Files changed
- `src/pages/Contact.tsx` — add state, click handler, conditional rendering with cargo car SVG and roll-off animation


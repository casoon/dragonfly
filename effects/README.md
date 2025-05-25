# UI Effects Library

This library provides a comprehensive collection of modern UI effects for web applications. All effects are optimized for performance and adhere to accessibility guidelines.

## Installation

```bash
npm install @casoon/ui-lib
```

## Integration

```css

/* Import specific effect categories */
@import '@casoon/ui-lib/effects/motion/index.css';
@import '@casoon/ui-lib/effects/visual/index.css';
@import '@casoon/ui-lib/effects/typography/index.css';
@import '@casoon/ui-lib/effects/interaction/index.css';
@import '@casoon/ui-lib/effects/layout-effects/index.css';
@import '@casoon/ui-lib/effects/themes/index.css';
@import '@casoon/ui-lib/effects/particles/index.css';
```

## Available Effects

Our effects are organized into the following categories:

### 1. Motion Effects (`motion/`)

```css
/* Basic animations */
.animate-fade-in { ... }
.animate-slide-up { ... }
.animate-bounce { ... }
.animate-pulse { ... }
.animate-spin { ... }

/* Scroll animations */
.scroll-fade-in { ... }
.scroll-slide-up { ... }
.scroll-scale { ... }

/* Transition effects */
.transition-smooth { ... }
.transition-bounce { ... }
.transition-elastic { ... }
```

### 2. Visual Effects (`visual/`)

```css
/* Basic filters */
.filter-blur { ... }
.filter-brightness { ... }
.filter-contrast { ... }
.filter-grayscale { ... }
.filter-hue-rotate { ... }

/* Shadows */
.shadow-sm { ... }
.shadow-md { ... }
.shadow-lg { ... }

/* Glass effects */
.glass { ... }
.glass-blur { ... }
.glass-frost { ... }
```

### 3. Typography Effects (`typography/`)

```css
/* Text shadows */
.text-shadow-sm { ... }
.text-shadow-md { ... }
.text-shadow-lg { ... }
.text-shadow-glow { ... }
.text-shadow-neon { ... }

/* Text styles */
.text-stroke-sm { ... }
.text-stroke-md { ... }
.text-stroke-lg { ... }
.text-gradient { ... }
.text-shine { ... }
```

### 4. Interaction Effects (`interaction/`)

```css
/* Basic interactions */
.interactive { ... }
.click-ripple { ... }
.draggable { ... }
.scroll-smooth { ... }

/* Hover effects */
.hover-lift { ... }
.hover-scale { ... }
.hover-rotate { ... }

/* Touch effects */
.touch-feedback { ... }
.touch-ripple { ... }
```

### 5. Layout Effects (`layout-effects/`)

```css
/* Transforms */
.transform-rotate { ... }
.transform-scale { ... }
.transform-skew { ... }

/* Clipping & Masking */
.clip-circle { ... }
.clip-hexagon { ... }
.mask-fade { ... }
```

### 6. Theme Effects (`themes/`)

```css
/* Neumorphism */
.neo { ... }
.neo-inset { ... }
.neo-primary { ... }

/* 3D Effects */
.effect-3d { ... }
.effect-3d-button { ... }
.effect-3d-card { ... }

/* Gradients */
.gradient-primary { ... }
.gradient-rainbow { ... }
.gradient-sunset { ... }
```

### 7. Particle Effects (`particles/`)

```css
/* Particle backgrounds */
.particles-dots { ... }
.particles-bubbles { ... }
.particles-stars { ... }
```

## Effect Combinations

### 1. Animated Cards

```html
<div class="neo neo-primary animate-pulse">
  Pulsating Neo Effect
</div>

<div class="glass hover-lift animate-fade-in">
  Hover Effect with Animation
</div>
```

### 2. Filters with Animations

```html
<div class="filter-vintage animate-fade-in">
  Vintage Effect with Fade-in
</div>

<div class="filter-cool hover-scale">
  Cool Filter with Hover Scaling
</div>
```

### 3. Interactive Transformations

```html
<button class="interactive hover-lift active-scale">
  Interactive Button
</button>

<div class="draggable hover-rotate">
  Draggable Element with Rotation
</div>
```

### 4. Typography with Effects

```html
<h2 class="text-gradient animate-fade-in">
  Gradient Text with Animation
</h2>

<p class="text-shadow-neon hover-scale">
  Neon Text with Hover Effect
</p>
```

## Best Practices

1. **Performance**
   - Use `will-change` sparingly
   - Combine effects judiciously
   - Leverage hardware acceleration where possible

2. **Accessibility**
   - All effects respect `prefers-reduced-motion`
   - Focus states are always visible
   - Touch targets are adequately sized

3. **Responsive Design**
   - Effects adapt to screen sizes
   - Mobile-optimized touch interactions
   - Reduced effects on smaller displays

## CSS Variables

All effects can be customized via CSS variables:

```css
:root {
  /* Neo effects */
  --neo-bg: #e0e5ec;
  --neo-shadow-dark: #a3b1c6;
  --neo-shadow-light: #ffffff;

  /* Filters */
  --filter-blur: 4px;
  --filter-brightness: 1.2;
  --filter-contrast: 1.2;

  /* Animations */
  --animation-duration: 0.3s;
  --animation-timing: ease;
}
```

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance Tips

1. **Optimization**
   - Use `transform` instead of `top/left`
   - Use `opacity` for fade effects
   - Avoid layout thrashing

2. **Reduced Motion**
   - All animations respect `prefers-reduced-motion`
   - Alternative effects for reduced motion
   - No automatic animations

3. **Mobile Optimization**
   - Touch-optimized interactions
   - Reduced effects on mobile devices
   - Optimized performance for less powerful devices

## Examples

### 1. Interactive Map

```html
<div class="neo neo-primary hover-lift animate-fade-in">
  <img class="filter-cool" src="map.jpg" alt="Map">
  <div class="interactive hover-scale">
    Interactive Area
  </div>
</div>
```

### 2. Animated Button

```html
<button class="neo neo-secondary interactive hover-lift active-scale animate-pulse">
  Click me
</button>
```

### 3. Image Gallery

```html
<div class="scroll-smooth">
  <div class="neo neo-primary filter-vintage hover-scale">
    <img src="image1.jpg" alt="Image 1">
  </div>
  <div class="glass filter-cool hover-lift text-shadow-glow">
    <img src="image2.jpg" alt="Image 2">
  </div>
</div>
```

## Troubleshooting

1. **Effects not working**
   - CSS files correctly imported?
   - CSS variables defined?
   - Check browser support

2. **Performance issues**
   - Reduce effects
   - Check hardware acceleration
   - Enable mobile optimization

3. **Accessibility issues**
   - Test reduced motion
   - Check focus states
   - Verify touch targets

## License

MIT License - See LICENSE.md for details. 
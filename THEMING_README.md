# Centralized Theming System

This project uses a centralized theming system for consistent styling across all components.

## 📁 Theme Location

The theme is defined in `/lib/theme.ts` and includes:

- **Colors**: Primary, cyan, gray, green, yellow, red, orange, pink, purple palettes
- **Gradients**: Primary, secondary, accent, card, background, text, button gradients
- **Backgrounds**: Gradient and radial gradient patterns
- **Borders**: Primary, secondary, hover, focus border styles
- **Text**: Primary, secondary, accent, muted, gradient text styles
- **Shadows**: Card, card hover, button, button hover shadow styles
- **Animations**: Fast, normal, slow animation durations
- **Styles**: Predefined style combinations for common UI patterns

## 🚀 Usage Examples

### Import Theme
```tsx
import { theme, gradients, backgrounds, text, styles, shadows, borders, animations } from "@/lib/theme";
```

### Use in Components

#### Background Gradients
```tsx
<div className={backgrounds.gradient}>
  {/* Content */}
</div>
```

#### Text Gradients
```tsx
<h1 className={text.gradient}>
  Gradient Text
</h1>
```

#### Button Styles
```tsx
<Button className={styles.buttonPrimary}>
  Primary Button
</Button>

<Button className={styles.buttonOutline}>
  Outline Button
</Button>
```

#### Card Styles
```tsx
<Card className={styles.cardBase}>
  {/* Card content */}
</Card>
```

#### Custom Gradients
```tsx
<div className={`bg-gradient-to-r ${gradients.primary}`}>
  Custom gradient background
</div>
```

## 🎨 Color Palette

### Primary Colors
- `theme.colors.primary` - Blue shades (50-900)
- `theme.colors.cyan` - Cyan shades (50-900)
- `theme.colors.gray` - Gray shades (50-900)

### Accent Colors
- `theme.colors.green` - Success colors
- `theme.colors.yellow` - Warning colors
- `theme.colors.red` - Error colors
- `theme.colors.orange` - Orange shades
- `theme.colors.pink` - Pink shades
- `theme.colors.purple` - Purple shades

## 🔧 Available Constants

### Gradients
- `gradients.primary` - Main blue-cyan gradient
- `gradients.secondary` - Lighter blue-cyan
- `gradients.accent` - Green-blue gradient
- `gradients.warning` - Orange-pink gradient
- `gradients.card` - Light blue-cyan for cards

### Backgrounds
- `backgrounds.gradient` - Main page background
- `backgrounds.radial` - Radial gradient overlay
- `backgrounds.radialSecondary` - Secondary radial overlay

### Text Styles
- `text.primary` - Main text color
- `text.secondary` - Secondary text color
- `text.accent` - Accent text color
- `text.muted` - Muted text color
- `text.gradient` - Gradient text

### Border Styles
- `borders.primary` - Main border color
- `borders.secondary` - Secondary border color
- `borders.hover` - Hover border effect
- `borders.focus` - Focus border effect

## 📋 Migration Guide

When adding new components or updating existing ones:

1. **Import theme constants** at the top of your component
2. **Replace hardcoded colors** with theme constants
3. **Use style combinations** instead of individual classes
4. **Test responsiveness** across different screen sizes

## 🎯 Benefits

- **Consistency** - Unified color scheme across the entire app
- **Maintainability** - Change colors in one place, updates everywhere
- **Developer Experience** - Predefined style combinations for common patterns
- **Performance** - Reduced CSS bundle size through shared constants
- **Accessibility** - Consistent contrast ratios and color accessibility

## 🔄 Future Enhancements

- Dark mode support
- Custom theme switching
- CSS variables integration
- Design token system
- Component-level theming overrides

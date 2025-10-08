export const theme = {
  // Primary color palette
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    green: {
      500: '#10b981',
      600: '#059669',
    },
    yellow: {
      400: '#fbbf24',
    },
    red: {
      500: '#ef4444',
    },
    orange: {
      400: '#fb923c',
    },
    pink: {
      400: '#f472b6',
      600: '#db2777',
    },
    purple: {
      100: '#f3e8ff',
      600: '#9333ea',
    },
  },

  // Gradient combinations
  gradients: {
    primary: 'from-blue-600 to-cyan-600',
    primaryHover: 'from-blue-700 to-cyan-700',
    secondary: 'from-blue-500 to-cyan-500',
    accent: 'from-green-600 to-blue-600',
    card: 'from-blue-50 to-cyan-50',
    background: 'from-blue-50 via-white to-cyan-50',
    text: 'from-blue-600 to-cyan-600',
    button: 'from-blue-600 to-cyan-600',
    buttonHover: 'from-blue-700 to-cyan-700',
    success: 'from-green-600 to-blue-600',
    warning: 'from-orange-400 to-pink-400',
    purple: 'from-purple-100 to-purple-600',
  },

  // Background patterns
  backgrounds: {
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50',
    radial: 'bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]',
    radialSecondary: 'bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.8),transparent_50%)]',
  },

  // Border styles
  borders: {
    primary: 'border-blue-200',
    secondary: 'border-gray-100',
    hover: 'hover:border-blue-200',
    focus: 'focus:border-blue-500',
  },

  // Text colors
  text: {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
    accent: 'text-blue-600',
    muted: 'text-gray-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent',
  },

  // Shadow styles
  shadows: {
    card: 'shadow-xl',
    cardHover: 'hover:shadow-xl',
    button: 'shadow-lg',
    buttonHover: 'hover:shadow-xl',
  },

  // Animation durations
  animations: {
    fast: 'duration-300',
    normal: 'duration-300',
    slow: 'duration-500',
  },

  // Common styling patterns
  styles: {
    glassmorphism: 'bg-white/90 backdrop-blur-sm',
    cardBase: 'border-0 shadow-xl bg-white/80 backdrop-blur-sm',
    buttonPrimary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white',
    buttonOutline: 'border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600',
  },
};

// Helper function to get gradient classes
export const getGradientClasses = (type: keyof typeof theme.gradients) => {
  return theme.gradients[type];
};

// Helper function to get color classes
export const getColorClasses = (color: keyof typeof theme.colors, shade: keyof typeof theme.colors.gray) => {
  return `text-${color}-${shade}`;
};

// Export individual theme sections for direct access
export const colors = theme.colors;
export const gradients = theme.gradients;
export const backgrounds = theme.backgrounds;
export const borders = theme.borders;
export const text = theme.text;
export const shadows = theme.shadows;
export const animations = theme.animations;
export const styles = theme.styles;

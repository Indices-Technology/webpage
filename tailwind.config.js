/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // IBM Plex — engineering heritage, distinct from the default system stack.
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Single brand accent. Sector colours stay as small signals, never as fills.
        brand: {
          50:  '#eef4ff',
          100: '#d9e5ff',
          200: '#bcd1ff',
          300: '#8eb3ff',
          400: '#5888fc',
          500: '#3363f5',
          600: '#1f43e0',   // primary
          700: '#1b35b5',
          800: '#1c308f',
          900: '#1c2d71',
          950: '#151d45',
        },
        ink: {
          DEFAULT: '#0e1116',
          soft:    '#1a1f28',
          muted:   '#5b6472',
        },
      },
      letterSpacing: {
        // Used on the small mono labels that replace the old uppercase eyebrows.
        label: '0.14em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        // Flat, close-to-surface elevation instead of coloured glows.
        card: '0 1px 2px rgba(14, 17, 22, 0.04), 0 1px 3px rgba(14, 17, 22, 0.06)',
        lift: '0 8px 24px -8px rgba(14, 17, 22, 0.14)',
      },
      transitionDuration: {
        DEFAULT: '180ms',
      },
    },
  },
  plugins: [],
}

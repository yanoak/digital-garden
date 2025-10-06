/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5d1',
          300: '#8dd0b5',
          400: '#56b394',
          500: '#2d6a4f',
          600: '#1b4332',
          700: '#0f2e1f',
          800: '#0a1f15',
          900: '#05140c',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h1: {
              color: '#2d6a4f',
              fontWeight: '700',
            },
            h2: {
              color: '#40916c',
              fontWeight: '600',
            },
            h3: {
              color: '#2d6a4f',
              fontWeight: '600',
            },
            a: {
              color: '#2d6a4f',
              textDecoration: 'none',
              '&:hover': {
                color: '#1b4332',
              },
            },
            code: {
              backgroundColor: '#f1f5f9',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontFamily: 'Courier New, monospace',
            },
            pre: {
              backgroundColor: '#f1f5f9',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeftColor: '#2d6a4f',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#64748b',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

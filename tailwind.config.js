/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        // Classic Zen Color Palette
        primary: '#04724D', // Dark spring green
        secondary: '#B8DBD9', // Light blue
        accent: '#586F7C', // Payne's gray
        background: '#F4F4F9', // Ghost white
        text: '#0A0A0A', // Night
        white: '#FFFFFF',
        // Additional semantic colors
        border: '#B8DBD9',
        'border-hover': '#04724D',
        'text-muted': '#586F7C',
        'text-hover': '#04724D',
      },
      fontFamily: {
        'heading': ['Archivo Narrow', 'sans-serif'],
        'body': ['David Libre', 'serif'],
        'sans': ['Archivo Narrow', 'sans-serif'],
        'serif': ['David Libre', 'serif'],
        'mono': ['Courier New', 'monospace'],
      },
      fontSize: {
        'title': ['56px', { lineHeight: '1.4', letterSpacing: '-1px' }],
        'heading': ['26px', { lineHeight: '1.3' }],
        'subheading': ['20px', { lineHeight: '1.4' }],
        'body': ['17px', { lineHeight: '1.8' }],
        'label': ['14px', { lineHeight: '1.4', letterSpacing: '2px' }],
        'small': ['13px', { lineHeight: '1.5', letterSpacing: '1px' }],
      },
      fontWeight: {
        'heading': '400',
        'heading-bold': '600',
        'heading-black': '700',
        'body': '400',
        'body-medium': '500',
        'body-bold': '700',
        'label': '600',
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '2.5rem',    // 40px
        '2xl': '3.125rem', // 50px
        '3xl': '3.75rem',  // 60px
        '4xl': '5rem',     // 80px
        '5xl': '6.25rem',  // 100px
        '100': '25rem',    // 400px for hero section
        '12.5': '3.125rem', // 50px for button padding
      },
      transitionTimingFunction: {
        'zen': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'zen': '300ms',
      },
      borderWidth: {
        'zen': '1px',
      },
      maxWidth: {
        'container': '1400px',
        'content': '700px',
        'sidebar': '260px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#0A0A0A',
            fontFamily: 'David Libre, serif',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            h1: {
              color: '#0A0A0A',
              fontFamily: 'Archivo Narrow, sans-serif',
              fontWeight: '600',
              fontSize: '3.5rem',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: '#0A0A0A',
              fontFamily: 'Archivo Narrow, sans-serif',
              fontWeight: '600',
              fontSize: '2rem',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            },
            h3: {
              color: '#0A0A0A',
              fontFamily: 'Archivo Narrow, sans-serif',
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.3',
            },
            a: {
              color: '#586F7C',
              textDecoration: 'none',
              transition: 'color 300ms ease',
              '&:hover': {
                color: '#04724D',
              },
            },
            code: {
              backgroundColor: '#F4F4F9',
              padding: '0.125rem 0.25rem',
              fontFamily: 'Courier New, monospace',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: '#F4F4F9',
              padding: '1rem',
              overflowX: 'auto',
              border: '1px solid #B8DBD9',
            },
            blockquote: {
              borderLeftColor: '#04724D',
              borderLeftWidth: '1px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#586F7C',
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

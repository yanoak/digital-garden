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
        // Content page typography
        'content-title': ['52px', { lineHeight: '1.3', fontWeight: '600' }],
        'content-subtitle': ['20px', { lineHeight: '1.6' }],
        'content-body': ['19px', { lineHeight: '1.9' }],
        'content-h2': ['32px', { lineHeight: '1.3' }],
        'content-h3': ['24px', { lineHeight: '1.4' }],
        'content-blockquote': ['20px', { lineHeight: '1.6' }],
        'content-code': ['17px', { lineHeight: '1.6' }],
        'content-code-block': ['15px', { lineHeight: '1.6' }],
        'content-meta': ['14px', { lineHeight: '1.4', letterSpacing: '2px' }],
        'content-related': ['18px', { lineHeight: '1.4' }],
        'content-related-meta': ['13px', { lineHeight: '1.5', letterSpacing: '1px' }],
      },
      fontWeight: {
        'heading': '600',
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
        '15': '3.75rem',   // 60px for content header bottom
        '20': '5rem',      // 80px for content header top
        '30': '7.5rem',    // 120px for article content bottom
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
            fontSize: '1.1875rem', // 19px
            lineHeight: '1.9',
            fontWeight: '400',
            // Content page specific spacing
            p: {
              marginBottom: '1.875rem', // 30px
            },
            h2: {
              color: '#0A0A0A',
              fontFamily: 'Archivo Narrow, sans-serif',
              fontWeight: '600',
              fontSize: '2rem', // 32px
              lineHeight: '1.3',
              marginTop: '3.75rem', // 60px
              marginBottom: '1.5625rem', // 25px
            },
            h3: {
              color: '#0A0A0A',
              fontFamily: 'Archivo Narrow, sans-serif',
              fontWeight: '600',
              fontSize: '1.5rem', // 24px
              lineHeight: '1.4',
              marginTop: '2.8125rem', // 45px
              marginBottom: '1.25rem', // 20px
            },
            a: {
              color: '#04724D',
              textDecoration: 'none',
              borderBottom: '1px solid #B8DBD9',
              transition: 'border-color 300ms ease',
              '&:hover': {
                borderBottomColor: '#04724D',
              },
            },
            code: {
              backgroundColor: '#F4F4F9',
              padding: '0.125rem 0.375rem', // 2px 6px
              fontFamily: 'Courier New, monospace',
              fontSize: '1.0625rem', // 17px
              color: '#04724D',
            },
            pre: {
              backgroundColor: '#F4F4F9',
              padding: '1.5625rem', // 25px
              margin: '2.1875rem 0', // 35px vertical
              overflowX: 'auto',
              border: '1px solid #B8DBD9',
              fontSize: '0.9375rem', // 15px
              lineHeight: '1.6',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: '#0A0A0A',
            },
            blockquote: {
              borderLeftColor: '#04724D',
              borderLeftWidth: '3px',
              paddingLeft: '1.875rem', // 30px
              fontStyle: 'italic',
              color: '#586F7C',
              fontSize: '1.25rem', // 20px
              lineHeight: '1.6',
              margin: '2.5rem 0', // 40px vertical
            },
            ul: {
              paddingLeft: '1.875rem', // 30px
              marginBottom: '1.875rem', // 30px
            },
            ol: {
              paddingLeft: '1.875rem', // 30px
              marginBottom: '1.875rem', // 30px
            },
            li: {
              marginBottom: '0.75rem', // 12px
            },
            hr: {
              border: 'none',
              borderTop: '1px solid #B8DBD9',
              margin: '3.125rem 0', // 50px vertical
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

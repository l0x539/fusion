/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '991px',
        // => @media (min-width: 1280px) { ... }
        'smmax' : {'max': '767px'}, // => @media (max-width: 767px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'crypto-mate': "url('/assets/images/cryptomate.png')",
        'la-palma': "url('/assets/images/lapalma.png')",
        'lazo': "url('/assets/images/lazo.png')",
        'soy-rada': "url('/assets/images/soyrada.png')",
        'lazo-brand': "linear-gradient(181deg, #000 -22.74%, rgba(0, 0, 0, 0.00) 22.94%, rgba(255, 212, 245, 0.37) 57.18%, #FFD4F5 99.07%)"
      },
      colors: {
        'web-yellow': '#FFF852',
        'design-blue': '#1B71F2',
        'uix-red': '#f50808',
        'vfx-purple': '#BCA2F2',
      },
      fontFamily: {
        main: ['var(--font-helvetica)', 'Helvetica', 'Raleway'],
        flink: ['var(--font-inter)', 'Inter', 'Helvetica', 'Raleway'],
        inter: ['var(--font-inter)', 'Inter', 'Helvetica', 'Raleway'],
        gothic: ['Gothic A1', 'Helvetica', 'Raleway'],
        cryptomate: ['var(--font-space-grotesk)', 'Space Grotesk', 'Helvetica', 'Raleway'],
        jost: ['var(--font-jost)', 'Jost', 'Helvetica', 'Raleway'],
        soyrada: ['var(--font-montserrat)', 'Montserrat', 'Jost', 'Helvetica', 'Raleway'],
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-20px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0,
            // transform: 'translatey(20px)'
          },
          '100%': {
            opacity: 1,
            // transform: 'translatey(0px)'
          }
        },
        pageFadeIn: {
          '0%': {
            opacity: 0,
            // transform: 'translatey(20px)'
          },
          '50%': {
            opacity: 0,
            // transform: 'translatey(20px)'
          },
          '75%': {
            opacity: 0.3,
            // transform: 'translatey(20px)'
          },
          '100%': {
            opacity: 1,
            // transform: 'translatey(0px)'
          }
        }
      },
      gridTemplateColumns: {
        'footer': '1.3fr 0.6fr  1fr 1fr',
        'partner-mobile': '0.6fr 1fr',
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0, 0, 0.2, 1) 1 forwards',
        'page-fade-in': 'pageFadeIn 1s cubic-bezier(0, 0, 0.2, 1) 1 forwards',
      }
    },
  },
  plugins: [],
  safelist: [
    'translate-x-[200vw]',
    'translate-x-[400vw]',
    'translate-x-[600vw]',
    'translate-x-[800vw]',
    'translate-x-[1000vw]',
    'translate-x-[-200vw]',
    'translate-x-[-400vw]',
    'translate-x-[-600vw]',
    'translate-x-[-800vw]',
    'translate-x-[-1000vw]',
    'bg-crypto-mate',
    'bg-la-palma',
    'bg-lazo',
    'bg-soy-rada'
  ]
}

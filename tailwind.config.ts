import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7B9C47',
          'primary-600': '#6C8B3F',
          'primary-100': '#C8D6AA',
          secondary: '#8F5635',
          'secondary-700': '#874A27',
          accent: '#B2C593',
          ivory: '#E8E1D8',
          surface: '#FCFCFB',
          text: '#3E2A20',
          'text-2': '#6B5246',
          line: '#A3986D',
          danger: '#D14B3A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config

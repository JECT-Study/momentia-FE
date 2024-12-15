import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      colors: {
        main: '#6304FF',
        system: {
          error: '#FF2828',
          success: '#3D6EFF',
        },
        black: '#111111',
        white: '#FFFFFF',
        gray: {
          900: '#222222',
          800: '#2B2B2B',
          700: '#616161',
          600: '#757575',
          500: '#9E9E9E',
          400: '#B5B5B5',
          300: '#E0E0E0',
          200: '#EEEEEE',
          100: '#F5F5F5',
          50: '#FAFAFA',
        },
        title: '#FFFFFF',
        subtitle: '#F5F5F5',
        background: {
          base: '#101010',
        },
      },
      spacing: {
        '4.5': '18px',
        '7.5': '30px',
        '15': '60px',
      },
    },
  },
  plugins: [],
} satisfies Config;

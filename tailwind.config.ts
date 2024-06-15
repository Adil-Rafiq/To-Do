import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robolt: ['Robolt x Hand Light', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: '#7068FF', // #7068FF, #BB86FC, #F8C630, #388697, #3185FC
        primary: '#ffffff',
        secondary: '#BDBDBD',
      },
      backgroundColor: {
        highlight: '#03DAC6',
        error: '#CF6679',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#221F20',
        facebook: '#1877F2',
        twitter: '#1D9BF0',
        twitch: '#6441A4',
        fontDark: '#212020',
        fontGray: '#C6C6C6',
        fontOverline: '#42393B',
      },
    },
  },
  plugins: [],
};
export default config;

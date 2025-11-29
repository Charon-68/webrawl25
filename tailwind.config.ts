import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#feb901' , // Royal Blue - can be swapped easily
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        // Alternative: Maroon theme
        // primary: {
        //   DEFAULT: '#800020',
        //   dark: '#5a0017',
        //   light: '#a0002a',
        // },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config


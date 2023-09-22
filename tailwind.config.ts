import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        '[color-primary]': '#4b68da',
        '[color-border]': '#2a2a2a',
        '[color-border-light]': '#2a2a2a',
        '[color-border-lighter]': '#4a4a4a',
        '[color-border-dark]': '#1a1a1a',
        '[color-bg]': '#101010',
        '[color-bg-dark]': '#0a0a0a',
        '[color-text-gray]': colors.gray[400]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#ffffff',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#1f2937',
        },
        foreground: {
          DEFAULT: '#1f2937',
          dark: '#f3f4f6',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#111827',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#374151',
        },
      },
    },
  },
  plugins: [],
}

export default config

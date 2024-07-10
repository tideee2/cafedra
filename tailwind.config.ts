import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '80-100': '80% 100%',
        '16': '4rem',
      },
      colors: {
        'custom-blue': '#002B6E',
        'white': '#fff',
        'primary': '#FFBC0F',
        'secondary-bg': '#D6E6FF',
        'text-primary': '#051C40',
        'gray': '#5E6063',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.border-b-2-transparent': {
          borderBottomWidth: '2px',
          borderBottomColor: 'transparent',
          borderBottomStyle: 'solid',
        },
      })
    },
  ],
}
export default config

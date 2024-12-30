/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#718096',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
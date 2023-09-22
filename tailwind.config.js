/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: '#181717',
      red:'#FF0A0A',
      grey: '#9C9C9C',
      white: '#ffffff'
    },
    extend: {
      backgroundImage: {
        'welcome': "url('../assets/pngegg (3) 2.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}


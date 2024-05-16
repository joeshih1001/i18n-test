/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center:true,
      padding:'12rem'
    },
    extend: {
      backgroundImage:{
        'homePageBanner':"url('./src/assets/img/bg.png')",
        'homePage':"url('./src/assets/img/homeBg.jpg')",
      },
      fontSize:{
        font65w700: [
          "65px",
          {
            lineHeight:"90px",
            fontWeight:'700'
          }
        ],
        font40w700: [
          "40px",
          {
            lineHeight:"50px",
            fontWeight:'700'
          }
        ],
        font28w500: [
          "28px",
          {
            lineHeight:"56px",
            fontWeight:'500'
          }
        ],
      }
    },
  },
  plugins: [],
}


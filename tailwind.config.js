/** @type {import('tailwindcss').Config} */ 
const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   scalein: {
      //     "0%": { transform: "scale(0)" },
      //     "100%": { transform: "scale(1)" }
      //   },
      //   scaleout: {
      //     "100%": { transform: "scale(1)" },
      //     "0%": { transform: "scale(0)" }
      //   },
      // },
      // animation: {
      //   scalein: "scalein 500ms linear",
      //   scaleout: "scaleout 500ms linear",
      // }
    },
  },
  plugins: [
    require('tailwind-typewriter')({
        wordsets: {
            bookstore: {
                words: ['Welcome to Words and Dreams', 'We communicate, we dream wistfully about the past and predict the future with hope and fear as we struggle to create our vision of a perfect world. Welcome to ever more words…and dreams'],
                delay: 3
            }
        }
    })
],
});

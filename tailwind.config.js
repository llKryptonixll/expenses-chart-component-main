/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"]
      },
      colors: {
        soft_red: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        dark_brown: "hsl(25, 47%, 15%)",
        medium_brown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        very_pale_orange: "hsl(33, 100%, 98%)"
      },
      fontSize: {
        base: "18px",
      },
      borderRadius: {
        main: "20px",
        bars: "5px"
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom'},
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        }
      },
      animation: {
        wiggle: 'wiggle 800ms ease-in',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary': '#4B00EB',
        'light': '#83ADFF',
        'electricViolet': {
          '50': '#f2f0ff',
          '100': '#e8e4ff',
          '200': '#d3cdff',
          '300': '#b5a5ff',
          '400': '#9172ff',
          '500': '#703aff',
          '600': '#6112ff',
          '700': '#5201ff',
          '800': '#4b00eb',
          '900': '#3a02b0',
          '950': '#200078',
      },
      

      },

      fontFamily: {
        'cocogoose': ['cocogoose', 'sens'],
      }


    },


  },
  plugins: []
}


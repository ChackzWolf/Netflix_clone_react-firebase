/** @type {import('tailwindcss').Config} */
import { imageUrl } from './src/constants/constants';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'netflix-bg': "url('https://occ-0-3709-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW5Ckmfu6AkisuRurw3OBwToP2FXhZTsP6oUt7LtLnj8FeJcxCgqLy9ap36k3TvGHTDgPlwC_sUEoJJ9izKCX3up8y-SOGZzEVEp.webp?r=cbb')"
      }),
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [],
}


// tailwind.config.js
import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  content: [
    "./vite-project/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        dirtchunk: ["DirtChunk", "sans-serif"],
      },
      scale: {
        '0.004': '0.004',
        '0.007': '0.007',
      },
    },
  },
  plugins: [],
});

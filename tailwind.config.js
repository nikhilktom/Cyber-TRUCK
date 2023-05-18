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
      animation: {
        glitch: "glitch 1s infinite",
      },
    },
  },
  plugins: [],
});

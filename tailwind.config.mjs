// tailwind.config.mjs
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite-svelte/**/*.{svelte,js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#00E5FF", dark: "#00B8D4" }
      }
    }
  },
  plugins: [flowbite],
};
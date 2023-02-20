/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "475px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // ...defaultTheme.screens,
    },
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      colors: {
        blue: "#35317D",
        orange: "#F26839",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    // Jekyll templates
    "./_layouts/**/*.{html,liquid}",
    "./_includes/**/*.{html,liquid}",

    // Markdown posts
    "./_posts/**/*.md",
    "./*.{html,md,liquid}",

    // JS for Alpine.js
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      // Custom spacing values
      spacing: {
        18: "4.5rem",  // optional
        30: "7.5rem",  // your custom py-30
        34: "8.5rem",
        40: "10rem",   // large padding
      },
      // You can add more custom colors, fonts here if needed
      colors: {
        primary: "#1DB954", // example green for buttons/icons
      },
    },
  },
  plugins: [],
};

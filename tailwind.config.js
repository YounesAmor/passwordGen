/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1000px",
    },
    extend: {
      colors: {
        moderateCyan: "#a6ffb1",
        darkBlack: "#0f0e15",
        softBlack: "#3d3d46",
        textColor: "#18171F",
      },
      fontFamily: {
        jetBrainsMono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};

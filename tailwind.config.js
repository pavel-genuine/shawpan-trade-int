


module.exports = {
mode: "jit",

content: ["./src/**/*.{js,ts,jsx,tsx}"],
// darkMode: "media",
theme: {
  extend: {
    fontFamily: {
      Allura: ["Allura", "cursive"],
      // Mynerve: ["'Mynerve'", "cursive"],
      Calibre:["Calibre","cursive"]
     },
  },
  colors: {
    'primary': '#000',
    'textPrimary':'#000',
    'accent':'#ff5926',
    'nav': 'grey', 
    // 'navBg': '#1F2937', 
    'navBg': '#0f172a', 
    'bg': 'black', 
    'bg2': '#1E1E1E',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  }
},
plugins: [],
};

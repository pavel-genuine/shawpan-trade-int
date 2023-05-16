


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
    // 'primary': '#000040', //navy
    // 'primary': '#10a310', //green
    // 'primary': '#ff4500', //orange
    // 'primary': 'black',
    // 'primary': '#020267',//navy
    // 'primary': '#5c0931', //qatar
    // 'primary': '#8d0434', //qatar-light
    'primary': '#000', //
    'textPrimary':'#000',
    'accent':'#4ADE80',
    'nav': 'grey', //
    'navBg': '#1F2937', //
    'bg': '#18181B', //background: #18181B;
    'bg2': '#1E1E1E', //background: #18181B;
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  }
},
plugins: [],
};

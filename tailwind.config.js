module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#33468f",
        sec: "#ffbd2c",
        ter: "#99978a",
        qua: "#ffffff",
        qui: "#000000",
        sen: "#691c1e",
        hui: "#B3A17C",
        textd: "#222222",
        textl: "#cccccc",
      },
      fontFamily: {
        ffont: ["Outfit", "sans-serif"],
        sfont: ["Uncial Antiqua", "serif"],
      },
      dropShadow: {
        "custom-lg": "0 3px 10px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

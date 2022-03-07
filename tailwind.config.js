module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: "#1DA1F2",
        cardbg:"#0F0F10",
        brand: {
          bg: "#000000",
          text:"141A1E",
          "card-bg": "#161616",
          placeholder: "#5F5F5F",
          border: "#3C3636",
          success: "rgba(3, 218, 197, 0.25)",
          error: "#ED2F2F",
          text: {
            heading: "#FFFFFF",
            subheading: "#808080",
            success: "#03DAC5",
            error: "#EF343F",
          },
          button: {
            text: "#141A1E",
            background: "#FFFFFF",
          },
          card: {
            title: "#E0E0E0",
            stats: "#B6B9C0",
            background: "#131313",
          },
        },
      },
    },
  },
  plugins: [],
};

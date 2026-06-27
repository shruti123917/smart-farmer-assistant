/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        app: "#F7FAF7",
        primary: "#2E7D32",
        secondary: "#66BB6A",
        accent: "#FFB300",
        ink: "#10231B",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 38, 27, 0.08)",
        float: "0 14px 40px rgba(46, 125, 50, 0.16)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top left, rgba(102, 187, 106, 0.28), transparent 40%), linear-gradient(135deg, #1f5b25 0%, #2E7D32 38%, #66BB6A 100%)",
        mesh: "radial-gradient(circle at 10% 20%, rgba(46,125,50,0.16), transparent 30%), radial-gradient(circle at 90% 10%, rgba(255,179,0,0.15), transparent 25%), radial-gradient(circle at 80% 80%, rgba(102,187,106,0.18), transparent 25%)"
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#1C1B1B",
        secText: "#6E9501",
        thirdText: "#C2D965",
      },
      animation: {
        "bounce-slow": "bounce-slow 1s infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      screens: {
        
        xs: "300px",
        sm: "500px",
        md: "700px",
        lg: "900px",
        xl: "1200px",
        "2xl": "1500px",
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
};
export default config;

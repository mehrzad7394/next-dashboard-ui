import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#C3EBFA",
        primaryLight: "#EDF9FD",
        primaryPurple: "#CFCEFF",
        primaryPurpleLight: "#F1F0FF",
        primaryYellow: "#FAE27C",
        primaryYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accept: "#16a34a",
        reject: "#dc2626",
        warn: "#ea580c",
      },
    },
  },
  plugins: [],
};
export default config;

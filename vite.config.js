import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    animation: {
    "spin-slow": "spin 12s linear infinite",
    "spin-slower": "spin 18s linear infinite",
    "spin-slowest": "spin 26s linear infinite",
  },
  },
  plugins: [react()],
});

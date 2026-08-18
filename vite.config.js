import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()]
})
=======
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
>>>>>>> 16c6df06d615bcb8b63a12bfdfc1732324056e0a

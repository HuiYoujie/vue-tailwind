/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/App.vue',
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#3b82f6",
        // success: "#22c55e",
        // danger: "#ef4444"
        primary: '#2563eb',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        device: '#64748b'
      }
    }
  },
  plugins: []
}
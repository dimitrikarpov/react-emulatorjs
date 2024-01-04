import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-emulatorjs",
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-emulatorjs": require.resolve("react-emulatorjs"),
    },
  },
})

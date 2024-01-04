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
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    //   "react-emulatorjs": require.resolve("react-emulatorjs"),
    // },
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "react-emulatorjs",
        replacement: require.resolve("react-emulatorjs"),
      },
    ],
  },
})
// alias: [
//   {
//     find: /@mui\/material/,
//     replacement: path.resolve(__dirname, 'node_modules', '@mui', 'material'),
//   },
// ],

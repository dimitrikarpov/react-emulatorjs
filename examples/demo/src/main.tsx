import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { EmuPropsProvider } from "./EmuPropsContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EmuPropsProvider>
      <App />
    </EmuPropsProvider>
  </React.StrictMode>,
)

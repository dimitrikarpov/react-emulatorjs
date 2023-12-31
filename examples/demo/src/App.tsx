import "./App.css"
import { Viewer } from "./emuprops/viewer/Viewer.tsx"
import { EmuPropsProvider } from "./emuprops/EmuPropsContext.tsx"
import { Builder } from "./emuprops/builder/Builder.tsx"

const App = () => {
  return (
    <EmuPropsProvider>
      <div className="flex flex-row">
        <Builder />
        <Viewer />
      </div>
    </EmuPropsProvider>
  )
}

export default App

/*
[?] EJS_gamePatchUrl
[?] EJS_fullscreenOnLoad
----
EJS_volume
----
add string to set path and bioses urls
also save thts settings in localStorage
*/

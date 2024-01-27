import { Viewer } from "./emuprops/viewer/Viewer.tsx"
import { EmuPropsProvider } from "./emuprops/EmuPropsContext.tsx"
import { Builder } from "./emuprops/builder/Builder.tsx"
import { EmulatorDialog } from "./emuprops/emulator/EmulatorDialog.tsx"
import "./App.css"

const App = () => {
  return (
    <EmuPropsProvider>
      <h1 className="mb-6 text-4xl font-bold">react-emulatorjs</h1>
      <h3 className="mb-6 text-lg text-muted-foreground">
        thing to integrate{" "}
        <a
          href="https://emulatorjs.org/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          EmulatorJS
        </a>{" "}
        in to Your React project
      </h3>
      <div className="flex flex-row gap-10">
        <Builder />
        <Viewer />
      </div>
      <div className="mt-6">
        <EmulatorDialog />
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

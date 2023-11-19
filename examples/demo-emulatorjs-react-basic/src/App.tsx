import { ChangeEvent, useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"
import { Emulator } from "emulatorjs-react"
import { CoreSelect } from "./CoreSelect"
import { Button } from "./@/components/button"
import type { CoreSelectOption } from "./CoreSelect.types"

const App = () => {
  const [rom, setRom] = useState<string>()
  const [platform, setPlatform] = useState<CoreSelectOption>("fceumm")

  const onRomUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  return (
    <div>
      <input type="file" onChange={onRomUpload} />
      <Button onClick={() => setRom(undefined)}>close rom</Button>

      {!rom && <CoreSelect value={platform} onChange={setPlatform} />}

      {rom && (
        <Emulator
          EJS_core={platform}
          EJS_gameUrl={rom}
          // EJS_pathtodata="https://demo.emulatorjs.org/data"
          // EJS_pathtodata="https://cdn.statically.io/gh/EmulatorJS/EmulatorJS/tree/v4.0.8/data"
          // EJS_pathtodata="https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS/data"
          EJS_pathtodata="/data"
          EJS_ready={() => {
            console.log("The emulator is ready!")
          }}
          EJS_onGameStart={() => {
            console.log("Game started!")
          }}
        />
      )}
    </div>
  )
}

export default App

// https://cdn.jsdelivr.net/gh/jquery/jquery/

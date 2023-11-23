import { ChangeEvent, useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"
import { Emulator } from "emulatorjs-react"
import { CoreSelect } from "./CoreSelect"
import { Button } from "./@/components/button"
import type { CoreSelectOption } from "./CoreSelect.types"
import { BiosSelect } from "./BiosSelect"

const App = () => {
  const [rom, setRom] = useState<string>()
  const [biosUrl, setBiosUrl] = useState<string>("")

  const [platform, setPlatform] = useState<CoreSelectOption>("fceumm")

  const onRomUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  return (
    <div>
      <label>
        ROM
        <input type="file" onChange={onRomUpload} />
      </label>

      <Button onClick={() => setRom(undefined)}>close rom</Button>

      {!rom && <CoreSelect value={platform} onChange={setPlatform} />}

      {platform && (
        <BiosSelect core={platform} value={biosUrl} onChange={setBiosUrl} />
      )}

      {rom && (
        <Emulator
          EJS_core={platform}
          EJS_gameUrl={rom}
          EJS_biosUrl={biosUrl}
          // EJS_biosUrl="https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph5501.bin"
          EJS_pathtodata="https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data"
          // EJS_pathtodata="/data"
          // EJS_ready={() => {
          //   console.log("The emulator is ready!")
          // }}
          // EJS_onGameStart={() => {
          //   console.log("Game started!")
          // }}
        />
      )}
    </div>
  )
}

export default App

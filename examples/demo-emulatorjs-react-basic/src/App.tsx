import { ChangeEvent, useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"
import { Emulator } from "emulatorjs-react"

const App = () => {
  const [rom, setRom] = useState<string>()

  const onRomUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  return (
    <div>
      <input type="file" onChange={onRomUpload} />
      <button onClick={() => setRom(undefined)}>close rom</button>
      {rom && (
        <Emulator
          EJS_core="nes"
          EJS_gameUrl={rom}
          EJS_pathtodata="https://demo.emulatorjs.org/data/"
          EJS_ready={() => {
            console.log("The emulator is ready!")
          }}
          EJS_onGameStart={() => {
            console.log("Game started!")
          }}
          EJS_Buttons={{ mute: false, cheat: false }}
        />
      )}
    </div>
  )
}

export default App

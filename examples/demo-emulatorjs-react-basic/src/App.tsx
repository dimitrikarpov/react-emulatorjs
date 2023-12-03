import { ChangeEvent, useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"
import { EJS_core, Emulator, Settings } from "emulatorjs-react"
import { CoreSelect } from "./CoreSelect"
import { Button } from "./@/components/button"
import { BiosSelect } from "./BiosSelect"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./@/components/ui/dialog"

const App = () => {
  const [rom, setRom] = useState<string>()
  const [biosUrl, setBiosUrl] = useState<string>()
  const [platform, setPlatform] = useState<EJS_core>("fceumm")
  const [isEmulatorDialogOpen, setIsEmulatorDialogOpen] = useState(false)

  const onRomUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  const onOpenChange = (open: boolean) => {
    setIsEmulatorDialogOpen(open)

    if (!open) {
      setRom(undefined)
    }
  }

  const emuProps = {
    EJS_core: platform,
    EJS_gameUrl: rom!,
    ...(biosUrl && { EJS_biosUrl: biosUrl }),
    EJS_pathtodata:
      "https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data", // "/data"
  } as Settings

  return (
    <div>
      <div className="flex flex-col text-left gap-5">
        <div className="flex gap-5 items-center">
          <p>Select ROM</p>
          <input type="file" onChange={onRomUpload} />
        </div>

        <div className="flex gap-5 items-center">
          <p>Select CORE</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Select Core</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Select Core</DialogTitle>
                <DialogDescription>
                  Select specific platform's Core
                </DialogDescription>
              </DialogHeader>
              <CoreSelect value={platform} onChange={setPlatform} />
            </DialogContent>
          </Dialog>

          {platform}
        </div>

        <div className="flex gap-5 items-center">
          <p>Select BIOS</p>
          {platform && (
            <BiosSelect core={platform} value={biosUrl} onChange={setBiosUrl} />
          )}

          {biosUrl ? biosUrl.split("/").at(-1) : ""}
        </div>

        <div>
          <Dialog onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
              <Button variant="default" disabled={!rom || !platform}>
                Start Emulator
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              {isEmulatorDialogOpen && <Emulator {...emuProps} />}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default App

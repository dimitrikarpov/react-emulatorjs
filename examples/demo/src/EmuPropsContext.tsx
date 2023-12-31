import { createContext, useState } from "react"
import { EJS_core, Settings } from "react-emulatorjs"
import { type EJS_Buttons, defaultButtons } from "./@/lib/buttons"

type EmuPropsContextType = {
  rom: string | undefined
  setRom: React.Dispatch<React.SetStateAction<string | undefined>>
  biosUrl: string | undefined
  setBiosUrl: React.Dispatch<React.SetStateAction<string | undefined>>
  platform: EJS_core
  setPlatform: React.Dispatch<React.SetStateAction<EJS_core>>
  isEmulatorDialogOpen: boolean
  setIsEmulatorDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  onEmulatorDialogToggle: (open: boolean) => void
  onPlatformChange: (platform: EJS_core) => void
  emuProps: Settings
  loadState: string | undefined
  setLoadState: React.Dispatch<React.SetStateAction<string | undefined>>
  gamePatchUrl: string | undefined
  setGamePatchUrl: React.Dispatch<React.SetStateAction<string | undefined>>
  debug: boolean
  setDebug: React.Dispatch<React.SetStateAction<boolean>>
  fullscreenOnLoad: boolean
  setFullscreenOnLoad: React.Dispatch<React.SetStateAction<boolean>>
  startOnLoaded: boolean
  setStartOnLoaded: React.Dispatch<React.SetStateAction<boolean>>
  buttons: EJS_Buttons
  setButtons: React.Dispatch<React.SetStateAction<EJS_Buttons>>
}

export const EmuPropsContext = createContext<EmuPropsContextType | null>(null)

type Props = {
  children?: React.ReactNode
}

export const EmuPropsProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [rom, setRom] = useState<string>()
  const [biosUrl, setBiosUrl] = useState<string>()
  const [platform, setPlatform] = useState<EJS_core>("fceumm")
  const [isEmulatorDialogOpen, setIsEmulatorDialogOpen] = useState(false)
  const [loadState, setLoadState] = useState<string>()
  const [gamePatchUrl, setGamePatchUrl] = useState<string>()
  const [debug, setDebug] = useState(false)
  const [fullscreenOnLoad, setFullscreenOnLoad] = useState(false)
  const [startOnLoaded, setStartOnLoaded] = useState(false)
  const [buttons, setButtons] = useState<EJS_Buttons>(defaultButtons)

  const emuProps = {
    EJS_core: platform,
    EJS_gameUrl: rom!,
    EJS_pathtodata:
      "https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data", // "/data"
    ...(biosUrl && { EJS_biosUrl: biosUrl }),
    ...(loadState && { EJS_loadStateURL: loadState }),
    ...(gamePatchUrl && { EJS_gamePatchUrl: gamePatchUrl }),
    ...(debug && { EJS_DEBUG_XX: true }),
    ...(fullscreenOnLoad && { EJS_fullscreenOnLoad: true }),
    ...(startOnLoaded && { EJS_startOnLoaded: true }),
    EJS_Buttons: buttons,
  } as Settings

  const onEmulatorDialogToggle = (open: boolean) => {
    setIsEmulatorDialogOpen(open)

    if (!open) {
      setRom(undefined)
    }
  }

  const onPlatformChange = (platform: EJS_core) => {
    setPlatform(platform)
    setBiosUrl(undefined)
  }

  return (
    <EmuPropsContext.Provider
      value={{
        rom,
        setRom,
        biosUrl,
        setBiosUrl,
        platform,
        setPlatform,
        isEmulatorDialogOpen,
        setIsEmulatorDialogOpen,
        onEmulatorDialogToggle,
        onPlatformChange,
        emuProps,
        loadState,
        setLoadState,
        gamePatchUrl,
        setGamePatchUrl,
        debug,
        setDebug,
        fullscreenOnLoad,
        setFullscreenOnLoad,
        startOnLoaded,
        setStartOnLoaded,
        buttons,
        setButtons,
      }}
    >
      {children}
    </EmuPropsContext.Provider>
  )
}

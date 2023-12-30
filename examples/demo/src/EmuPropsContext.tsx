import { createContext, useState } from "react"
import { EJS_core, Settings } from "react-emulatorjs"

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

  const emuProps = {
    EJS_core: platform,
    EJS_gameUrl: rom!,
    ...(biosUrl && { EJS_biosUrl: biosUrl }),
    EJS_pathtodata:
      "https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data", // "/data"
    ...(loadState && { EJS_loadStateURL: loadState }),
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
      }}
    >
      {children}
    </EmuPropsContext.Provider>
  )
}

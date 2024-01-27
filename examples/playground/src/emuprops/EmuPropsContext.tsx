import { createContext, useReducer, useState } from "react"
import { EJS_core, Settings, defaultPathToData } from "react-emulatorjs"
import {
  type EJS_Buttons,
  defaultButtons,
  isButtonsInDefaultState,
} from "../@/lib/buttons"
import { pathToDataLinks } from "../@/lib/path-to-data"

type emuPropsReducerState = {
  rom: string | undefined
  biosUrl: string | undefined
  platform: EJS_core
  gamePatchUrl: string | undefined
  loadState: string | undefined
  debug: boolean
  fullscreenOnLoad: boolean
  startOnLoaded: boolean
  buttons: EJS_Buttons
  pathToData: string
}

type emuPropsReducerAction =
  | { type: "setRom"; payload: string | undefined }
  | { type: "setBiosUrl"; payload: string | undefined }
  | { type: "setPlatform"; payload: EJS_core }
  | { type: "setGamePatchUrl"; payload: string | undefined }
  | { type: "setLoadState"; payload: string | undefined }
  | { type: "setDebug"; payload: boolean }
  | { type: "setFullscreenOnLoad"; payload: boolean }
  | { type: "setStartOnLoaded"; payload: boolean }
  | { type: "setButtons"; payload: EJS_Buttons }
  | { type: "setPathToData"; payload: string }

const emuPropsReducerInitialState: emuPropsReducerState = {
  rom: undefined,
  biosUrl: undefined,
  platform: "fceumm",
  gamePatchUrl: undefined,
  loadState: undefined,
  debug: false,
  fullscreenOnLoad: false,
  startOnLoaded: false,
  buttons: defaultButtons,
  pathToData: pathToDataLinks[0],
}

const emuPropsReducer = (
  state: emuPropsReducerState,
  action: emuPropsReducerAction,
) => {
  switch (action.type) {
    case "setRom":
      return { ...state, rom: action.payload }
    case "setBiosUrl":
      return { ...state, biosUrl: action.payload }
    case "setPlatform":
      return { ...state, platform: action.payload }
    case "setGamePatchUrl":
      return { ...state, gamePatchUrl: action.payload }
    case "setLoadState":
      return { ...state, loadState: action.payload }
    case "setDebug":
      return { ...state, debug: action.payload }
    case "setFullscreenOnLoad":
      return { ...state, fullscreenOnLoad: action.payload }
    case "setStartOnLoaded":
      return { ...state, startOnLoaded: action.payload }
    case "setButtons":
      return { ...state, buttons: action.payload }
    case "setPathToData":
      return { ...state, pathToData: action.payload }
    default:
      return state
  }
}

type EmuPropsContextType = {
  rom: string | undefined
  biosUrl: string | undefined
  platform: EJS_core
  gamePatchUrl: string | undefined
  loadState: string | undefined
  debug: boolean
  fullscreenOnLoad: boolean
  startOnLoaded: boolean
  buttons: EJS_Buttons
  pathToData: string
  dispatch: React.Dispatch<emuPropsReducerAction>

  emuProps: Settings
  isEmulatorDialogOpen: boolean
  setIsEmulatorDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  onEmulatorDialogToggle: (open: boolean) => void
  onPlatformChange: (platform: EJS_core) => void
}

export const EmuPropsContext = createContext<EmuPropsContextType | null>(null)

type Props = {
  children?: React.ReactNode
}

export const EmuPropsProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [isEmulatorDialogOpen, setIsEmulatorDialogOpen] = useState(false)

  const [
    {
      rom,
      biosUrl,
      platform,
      gamePatchUrl,
      loadState,
      debug,
      fullscreenOnLoad,
      startOnLoaded,
      buttons,
      pathToData,
    },
    dispatch,
  ] = useReducer(emuPropsReducer, emuPropsReducerInitialState)

  const emuProps = {
    EJS_core: platform,
    EJS_gameUrl: rom!,
    EJS_pathtodata: pathToData || defaultPathToData,
    ...(biosUrl && { EJS_biosUrl: biosUrl }),
    ...(loadState && { EJS_loadStateURL: loadState }),
    ...(gamePatchUrl && { EJS_gamePatchUrl: gamePatchUrl }),
    ...(debug && { EJS_DEBUG_XX: true }),
    ...(fullscreenOnLoad && { EJS_fullscreenOnLoad: true }),
    ...(startOnLoaded && { EJS_startOnLoaded: true }),
    ...(!isButtonsInDefaultState(buttons) && { EJS_Buttons: buttons }),
  } as Settings

  const onEmulatorDialogToggle = (open: boolean) => {
    setIsEmulatorDialogOpen(open)

    if (!open) {
      dispatch({ type: "setRom", payload: undefined })
    }
  }

  const onPlatformChange = (platform: EJS_core) => {
    dispatch({ type: "setPlatform", payload: platform })
    dispatch({ type: "setBiosUrl", payload: undefined })
  }

  return (
    <EmuPropsContext.Provider
      value={{
        rom,
        biosUrl,
        platform,
        isEmulatorDialogOpen,
        setIsEmulatorDialogOpen,
        onEmulatorDialogToggle,
        onPlatformChange,
        emuProps,
        loadState,
        gamePatchUrl,
        debug,
        fullscreenOnLoad,
        startOnLoaded,
        buttons,
        pathToData,
        dispatch,
      }}
    >
      {children}
    </EmuPropsContext.Provider>
  )
}

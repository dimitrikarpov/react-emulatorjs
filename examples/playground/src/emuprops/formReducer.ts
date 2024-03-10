import { EJS_core, Language } from "react-emulatorjs"
import { type EJS_Buttons, defaultButtons } from "../@/lib/buttons"
import { romsCollection } from "./romsCollection"

export type FormState = {
  rom?: string
  biosUrl?: string
  platform: EJS_core
  gamePatchUrl?: string
  loadState?: string
  debug: boolean
  fullscreenOnLoad: boolean
  startOnLoaded: boolean
  buttons: EJS_Buttons
  pathToData?: string
  language?: Language
  width?: number
  height?: number
}

export type FormAction =
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
  | { type: "setLanguage"; payload: Language | undefined }
  | { type: "setWidth"; payload: number | undefined }
  | { type: "setHeight"; payload: number | undefined }

export const formInitialState: FormState = {
  rom: romsCollection[0].url,
  platform: romsCollection[0].core,
  debug: false,
  fullscreenOnLoad: false,
  startOnLoaded: true,
  buttons: defaultButtons,
}

export const formReducer = (state: FormState, action: FormAction) => {
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
    case "setLanguage":
      return { ...state, language: action.payload }
    case "setWidth":
      return { ...state, width: action.payload }
    case "setHeight":
      return { ...state, height: action.payload }
    default:
      return state
  }
}

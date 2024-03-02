import { Settings, defaultPathToData } from "react-emulatorjs"
import { isButtonsInDefaultState } from "../@/lib/buttons"
import { FormState } from "./formReducer"

export const getEmuProps = ({
  platform,
  rom,
  pathToData,
  biosUrl,
  loadState,
  gamePatchUrl,
  debug,
  fullscreenOnLoad,
  startOnLoaded,
  buttons,
  language,
  width,
  height,
}: FormState) => {
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
    ...(language && { EJS_language: language }),
    ...(width && { width, height }),
  } as Settings

  return emuProps
}

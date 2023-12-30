import { Settings } from "react-emulatorjs"

export type EJS_Buttons = Exclude<Settings["EJS_Buttons"], undefined>

export const defaultButtons: EJS_Buttons = {
  restart: true,
  playPause: true,
  saveState: true,
  loadState: true,
  gamepad: true,
  cheat: true,
  cacheManager: true,
}

export const isButtonsInDefaultState = (buttons: EJS_Buttons) => {
  let k: keyof EJS_Buttons

  for (k in buttons) {
    if (defaultButtons[k] !== buttons[k]) return false
  }

  return true
}

type MainOptions = {
  /**
   * URL to ROM file.
   * @example ```EJS_gameUrl = 'someFile.nes'```
   * @link https://emulatorjs.org/docs/Options.html#ejs-gameurl
   */
  EJS_gameUrl: string
  /**
   * The path to the data folder. Version 4.0 and up will set this to the same path to the folder your loader.js file is in if not specified.
   * @default ```data/```
   * @example ```EJS_pathtodata = '/data/'```
   * @link https://emulatorjs.org/docs/Options.html#ejs-pathtodata
   */
  EJS_pathtodata: string
}

type DebugOptions = {
  EJS_DEBUG_XX?: boolean
}

type CoresOptions = [
  {
    EJS_core: "nes" | "fceumm" | "nestopia"
    EJS_lightgun?: boolean
    EJS_biosUrl?: string
  },
  {
    EJS_core: "segaMD" | "genesis_plus_gx" | "picodrive"
  },
  {
    EJS_core: "snes" | "snes9x"
    EJS_biosUrl?: string
    EJS_mouse?: boolean
    EJS_multitap?: boolean
  },
  {
    EJS_core: "psx" | "mednafen_psx" | "pcsx_rearmed"
    EJS_biosUrl?: string
  },
]

type AdvancedOptions = {
  EJS_ready?: () => void
  EJS_onSaveState?: () => void
  EJS_onLoadState?: () => void
  EJS_onGameStart?: () => void
  EJS_Buttons?: {
    playPause?: boolean
    restart?: boolean
    mute?: boolean
    settings?: boolean
    fullscreen?: boolean
    saveState?: boolean
    loadState?: boolean
    screenRecord?: boolean
    gamepad?: boolean
    cheat?: boolean
    volume?: boolean
    saveSavFiles?: boolean
    loadSavFiles?: boolean
    quickSave?: boolean
    quickLoad?: boolean
    screenshot?: boolean
    cacheManager?: boolean
  }
}

export type Settings = MainOptions &
  DebugOptions &
  CoresOptions[number] &
  AdvancedOptions

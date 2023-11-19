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
  /**
   * Set the emulator UI to a certian language
   * @default ```en-US```
   * @link https://emulatorjs.org/docs/Options.html#ejs-language
   */
  EJS_language?: string
  /**
   * You can set the paths to the files used by the emulator. This is useful if you want to host the files in a different why than the default, like a blob or a cdn.
   * @link https://emulatorjs.org/docs/Options.html#ejs-paths
   */
  EJS_paths?: Record<string, string>
  /**
   * Sets the defauly volume for the emulator. 0=muted, 1=max
   * @default ```0.5```
   * @link https://emulatorjs.org/docs/Options.html#ejs-volume
   */
  EJS_volume?: number
}

type GameOptions = {
  /**
   * Set this to the title of the game. This will be used when saving states and taking screenshots.
   * @default ```The name of the ROM file```
   * @link https://emulatorjs.org/docs/Options.html#ejs-gamename
   */
  EJS_gameName?: string
  /**
   * Default cheats to be stored in the cheat manager screen.
   * @link https://emulatorjs.org/docs/Options.html#ejs-cheats
   * @example 
   * EJS_cheats = [
      ["name", "value"],
      ["name2", "value2"]
    ]   
   */
  EJS_cheats?: Array<[key: string, value: string]>
  /**
   * Set to true to start the game in fullscreen mode.
   * @link https://emulatorjs.org/docs/Options.html#ejs-fullscreenonload
   */
  EJS_fullscreenOnLoad?: boolean
  /**
   * Set to true to start the game when the page is loaded. Note that if the user has not interacted with the page, the emulator will freeze until they have done so.
   * @link https://emulatorjs.org/docs/Options.html#ejs-startonloaded
   */
  EJS_startOnLoaded?: boolean
}

type CoresOptionsCommon = {
  /**
   * URL to game patch file.
   * @link https://emulatorjs.org/docs/Options.html#ejs-gamepatchurl
   */
  EJS_gamePatchUrl?: string
  /**
   * Runs the core using threads. This may improve performance.
   * @link https://emulatorjs.org/docs/Options.html#ejs-thread
   */
  EJS_thread?: boolean
  /**
   * This is a url to the game parent data. For additional files needed for the game emulation.
   * @link https://emulatorjs.org/docs/Options.html#ejs-gameparenturl
   */
  EJS_gameParentUrl?: string
  /**
   * URL to save state. To be loaded on game start.
   * @link https://emulatorjs.org/docs/Options.html#ejs-loadstateurl
   */
  EJS_loadStateURL?: string
}

type CoresOptions = [
  {
    /**
     * If set to 3do, emulator will use the opera core.
     * @link https://emulatorjs.org/github/docs/Systems/3DO.html
     */
    EJS_core: "3do" | "opera"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to arcade, emulator will use the fbneo core.
     * @link https://emulatorjs.org/github/docs/Systems/Arcade.html
     */
    EJS_core: "arcade" | "fbneo" | "fbalpha2012_cps1" | "fbalpha2012_cps2"
  },
  {
    /**
     * If set to atari2600, emulator will use the stella2014 core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%202600.html
     */
    EJS_core: "atari2600" | "stella2014"
  },
  {
    /**
     * If set to atari5200, emulator will use the a5200 core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%205200.html
     */
    EJS_core: "atari5200" | "a5200"
  },
  {
    /**
     * If set to atari7800, emulator will use the prosystem core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%207800.html
     */
    EJS_core: "atari7800" | "prosystem"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to jaguar, emulator will use the virtualjaguar core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%20Jaguar.html
     */
    EJS_core: "jaguar" | "virtualjaguar"
  },
  {
    /**
     * If set to lynx, emulator will use the handy core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%20Lynx.html
     */
    EJS_core: "lynx" | "handy"
    EJS_biosUrl?: string
  },
  {
    /**
     * @link https://emulatorjs.org/github/docs/Systems/MAME%202003.html
     */
    EJS_core: "mame2003"
  },
  {
    /**
     * If set to nes, emulator will use the fceumm core.
     * @link https://emulatorjs.org/github/docs/Systems/NES-Famicom.html
     */
    EJS_core: "nes" | "fceumm" | "nestopia"
    EJS_lightgun?: boolean
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to n64, emulator will use the mupen64plus_next core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%2064.html
     */
    EJS_core: "n64" | "mupen64plus_next"
  },
  {
    /**
     * If set to nds, emulator will use the melonds core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%20DS.html
     */
    EJS_core: "nds" | "melonds" | "desmume2015"
    /**
     * BIOS (melonds core only)
     */
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to gba, emulator will use the mgba core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%20Game%20Boy%20Advance.html
     */
    EJS_core: "gba" | "mgba"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to gb, emulator will use the gambatte core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%20Game%20Boy.html
     */
    EJS_core: "gb" | "gambatte" | "mgba"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to psx, emulator will use the pcsx_rearmed core.
     * @link https://emulatorjs.org/github/docs/Systems/PlayStation.html
     */
    EJS_core: "psx" | "mednafen_psx" | "pcsx_rearmed"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to sega32x, emulator will use the picodrive core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%2032X.html
     */
    EJS_core: "sega32x" | "picodrive"
  },
  {
    /**
     * If set to segaCD, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20CD.html
     */
    EJS_core: "segaCD" | "genesis_plus_gx" | "picodrive"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaGG, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Game%20Gear.html
     */
    EJS_core: "segaGG" | "genesis_plus_gx"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaMS, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Master%20System.html
     */
    EJS_core: "segaMS" | "genesis_plus_gx" | "picodrive"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaMD, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Mega%20Drive.html
     */
    EJS_core: "segaMD" | "genesis_plus_gx" | "picodrive"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaSaturn, emulator will use the yabause core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Saturn.html
     */
    EJS_core: "segaSaturn" | "yabause"
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to snes, emulator will use the snes9x core.
     * @link https://emulatorjs.org/github/docs/Systems/SNES.html
     */
    EJS_core: "snes" | "snes9x"
    EJS_biosUrl?: string
    EJS_mouse?: boolean
    EJS_multitap?: boolean
  },
  {
    /**
     * If set to vb, emulator will use the beetle_vb core.
     * @link https://emulatorjs.org/github/docs/Systems/Virtual%20Boy.html
     */
    EJS_core: "vb" | "beetle_vb"
  },
  {
    /**
     * If set to pce, emulator will use the mednafen_pce core.
     */
    EJS_core: "pce" | "mednafen_pce"
  },
  {
    /**
     * If set to pcfx, emulator will use the mednafen_pcfx core.
     */
    EJS_core: "pcfx" | "mednafen_pcfx"
  },
  {
    /**
     * If set to ngp, emulator will use the mednafen_ngp core.
     */
    EJS_core: "ngp" | "mednafen_ngp"
  },
  {
    /**
     * If set to ws, emulator will use the mednafen_wswan core.
     */
    EJS_core: "ws" | "mednafen_wswan"
  },
  {
    /**
     * If set to coleco, emulator will use the gearcoleco core.
     */
    EJS_core: "coleco" | "gearcoleco"
  },
  {
    /**
     * If set to c64, emulator will use the vice_x64 core.
     */
    EJS_core: "c64" | "vice_x64"
  },
  {
    /**
     * If set to amiga, emulator will use the puae core.
     */
    EJS_core: "amiga" | "puae"
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

type DebugOptions = {
  EJS_DEBUG_XX?: boolean
}

export type Settings = MainOptions &
  GameOptions &
  DebugOptions &
  CoresOptionsCommon &
  CoresOptions[number] &
  AdvancedOptions

export type EJS_core = Settings["EJS_core"]

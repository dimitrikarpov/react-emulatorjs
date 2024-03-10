import { languages } from "./languages"

export type Language = keyof typeof languages

export type PlatformId =
  | "3do"
  | "arcade"
  | "atari2600"
  | "atari5200"
  | "atari7800"
  | "jaguar"
  | "lynx"
  | "mame2003"
  | "nes"
  | "n64"
  | "nds"
  | "gba"
  | "gb"
  | "psx"
  | "sega32x"
  | "segaCD"
  | "segaGG"
  | "segaMS"
  | "segaMD"
  | "segaSaturn"
  | "snes"
  | "vb"
  | "pce"
  | "pcfx"
  | "ngp"
  | "ws"
  | "coleco"
  | "c64"
  | "amiga"

export type CoreName =
  | "opera"
  | "fbneo"
  | "fbalpha2012_cps1"
  | "fbalpha2012_cps2"
  | "stella2014"
  | "a5200"
  | "prosystem"
  | "virtualjaguar"
  | "handy"
  | "mame2003"
  | "fceumm"
  | "nestopia"
  | "mupen64plus_next"
  | "melonds"
  | "desmume2015"
  | "mgba"
  | "gambatte"
  | "mgba"
  | "mednafen_psx"
  | "pcsx_rearmed"
  | "picodrive"
  | "genesis_plus_gx"
  | "picodrive"
  | "genesis_plus_gx"
  | "genesis_plus_gx"
  | "picodrive"
  | "genesis_plus_gx"
  | "picodrive"
  | "yabause"
  | "snes9x"
  | "beetle_vb"
  | "mednafen_pce"
  | "mednafen_pcfx"
  | "mednafen_ngp"
  | "mednafen_wswan"
  | "gearcoleco"
  | "vice_x64"
  | "puae"

export type BiosName =
  | "panafz1.bin"
  | "panafz10.bin"
  | "panafz10-norsa.bin"
  | "panafz10e-anvil.bin"
  | "panafz10e-anvil-norsa.bin"
  | "panafz1j.bin"
  | "panafz1j-norsa.bin"
  | "goldstar.bin"
  | "sanyotry.bin"
  | "3do_arcade_saot.bin"
  | "7800 BIOS (U).rom"
  | "lynxboot.img"
  | "disksys.rom"
  | "gamegenie.nes"
  | "bios7.bin"
  | "bios9.bin"
  | "firmware.bin"
  | "dsi_bios7.bin"
  | "dsi_bios9.bin"
  | "dsi_firmware.bin"
  | "dsi_nand.bin"
  | "dsi_sd_card.bin"
  | "gb_bios.bin"
  | "gbc_bios.bin"
  | "gba_bios.bin"
  | "sgb_bios.bin"
  | "scph5500.bin"
  | "scph5501.bin"
  | "scph5502.bin"
  | "PSXONPSP660.bin"
  | "scph101.bin"
  | "scph7001.bin"
  | "scph1001.bin"
  | "bios_CD_E.bin"
  | "bios_CD_U.bin"
  | "bios_CD_J.bin"
  | "bios.gg"
  | "bios_E.sms"
  | "bios_U.sms"
  | "bios_J.sms"
  | "bios_MD.bin"
  | "saturn_bios.bin"
  | "BS-X.bin"
  | "STBIOS.bin"

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
   * Set the emulator UI to a certain language
   * @default ```en-US```
   * @link https://emulatorjs.org/docs/Options.html#ejs-language
   */
  EJS_language?: Language
  /**
   * You can set the paths to the files used by the emulator. This is useful if you want to host the files in a different why than the default, like a blob or a cdn.
   * @link https://emulatorjs.org/docs/Options.html#ejs-paths
   */
  EJS_paths?: Record<string, string>
  /**
   * Sets the default volume for the emulator. 0=muted, 1=max
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
    EJS_core: Extract<PlatformId, "3do"> | Extract<CoreName, "opera">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to arcade, emulator will use the fbneo core.
     * @link https://emulatorjs.org/github/docs/Systems/Arcade.html
     */
    EJS_core:
      | Extract<PlatformId, "arcade">
      | Extract<CoreName, "fbneo" | "fbalpha2012_cps1" | "fbalpha2012_cps2">
  },
  {
    /**
     * If set to atari2600, emulator will use the stella2014 core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%202600.html
     */
    EJS_core: Extract<PlatformId, "atari2600"> | Extract<CoreName, "stella2014">
  },
  {
    /**
     * If set to atari5200, emulator will use the a5200 core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%205200.html
     */
    EJS_core: Extract<PlatformId, "atari5200"> | Extract<CoreName, "a5200">
  },
  {
    /**
     * If set to atari7800, emulator will use the prosystem core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%207800.html
     */
    EJS_core: Extract<PlatformId, "atari7800"> | Extract<CoreName, "prosystem">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to jaguar, emulator will use the virtualjaguar core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%20Jaguar.html
     */
    EJS_core: Extract<PlatformId, "jaguar"> | Extract<CoreName, "virtualjaguar">
  },
  {
    /**
     * If set to lynx, emulator will use the handy core.
     * @link https://emulatorjs.org/github/docs/Systems/Atari%20Lynx.html
     */
    EJS_core: Extract<PlatformId, "lynx"> | Extract<CoreName, "handy">
    EJS_biosUrl?: string
  },
  {
    /**
     * @link https://emulatorjs.org/github/docs/Systems/MAME%202003.html
     */
    EJS_core: Extract<PlatformId, "mame2003"> | Extract<CoreName, "mame2003">
  },
  {
    /**
     * If set to nes, emulator will use the fceumm core.
     * @link https://emulatorjs.org/github/docs/Systems/NES-Famicom.html
     */
    EJS_core:
      | Extract<PlatformId, "nes">
      | Extract<CoreName, "fceumm" | "nestopia">
    EJS_lightgun?: boolean
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to n64, emulator will use the mupen64plus_next core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%2064.html
     */
    EJS_core: Extract<PlatformId, "n64"> | Extract<CoreName, "mupen64plus_next">
  },
  {
    /**
     * If set to nds, emulator will use the melonds core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%20DS.html
     */
    EJS_core:
      | Extract<PlatformId, "nds">
      | Extract<CoreName, "melonds" | "desmume2015">
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
    EJS_core: Extract<PlatformId, "gba"> | Extract<CoreName, "mgba">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to gb, emulator will use the gambatte core.
     * @link https://emulatorjs.org/github/docs/Systems/Nintendo%20Game%20Boy.html
     */
    EJS_core: Extract<PlatformId, "gb"> | Extract<CoreName, "gambatte" | "mgba">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to psx, emulator will use the pcsx_rearmed core.
     * @link https://emulatorjs.org/github/docs/Systems/PlayStation.html
     */
    EJS_core:
      | Extract<PlatformId, "psx">
      | Extract<CoreName, "mednafen_psx" | "pcsx_rearmed">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to sega32x, emulator will use the picodrive core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%2032X.html
     */
    EJS_core: Extract<PlatformId, "sega32x"> | Extract<CoreName, "picodrive">
  },
  {
    /**
     * If set to segaCD, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20CD.html
     */
    EJS_core:
      | Extract<PlatformId, "segaCD">
      | Extract<CoreName, "genesis_plus_gx" | "picodrive">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaGG, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Game%20Gear.html
     */
    EJS_core:
      | Extract<PlatformId, "segaGG">
      | Extract<CoreName, "genesis_plus_gx">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaMS, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Master%20System.html
     */
    EJS_core:
      | Extract<PlatformId, "segaMS">
      | Extract<CoreName, "genesis_plus_gx" | "picodrive">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaMD, emulator will use the genesis_plus_gx core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Mega%20Drive.html
     */
    EJS_core:
      | Extract<PlatformId, "segaMD">
      | Extract<CoreName, "genesis_plus_gx" | "picodrive">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to segaSaturn, emulator will use the yabause core.
     * @link https://emulatorjs.org/github/docs/Systems/Sega%20Saturn.html
     */
    EJS_core: Extract<PlatformId, "segaSaturn"> | Extract<CoreName, "yabause">
    EJS_biosUrl?: string
  },
  {
    /**
     * If set to snes, emulator will use the snes9x core.
     * @link https://emulatorjs.org/github/docs/Systems/SNES.html
     */
    EJS_core: Extract<PlatformId, "snes"> | Extract<CoreName, "snes9x">
    EJS_biosUrl?: string
    EJS_mouse?: boolean
    EJS_multitap?: boolean
  },
  {
    /**
     * If set to vb, emulator will use the beetle_vb core.
     * @link https://emulatorjs.org/github/docs/Systems/Virtual%20Boy.html
     */
    EJS_core: Extract<PlatformId, "vb"> | Extract<CoreName, "beetle_vb">
  },
  {
    /**
     * If set to pce, emulator will use the mednafen_pce core.
     */
    EJS_core: Extract<PlatformId, "pce"> | Extract<CoreName, "mednafen_pce">
  },
  {
    /**
     * If set to pcfx, emulator will use the mednafen_pcfx core.
     */
    EJS_core: Extract<PlatformId, "pcfx"> | Extract<CoreName, "mednafen_pcfx">
  },
  {
    /**
     * If set to ngp, emulator will use the mednafen_ngp core.
     */
    EJS_core: Extract<PlatformId, "ngp"> | Extract<CoreName, "mednafen_ngp">
  },
  {
    /**
     * If set to ws, emulator will use the mednafen_wswan core.
     */
    EJS_core: Extract<PlatformId, "ws"> | Extract<CoreName, "mednafen_wswan">
  },
  {
    /**
     * If set to coleco, emulator will use the gearcoleco core.
     */
    EJS_core: Extract<PlatformId, "coleco"> | Extract<CoreName, "gearcoleco">
  },
  {
    /**
     * If set to c64, emulator will use the vice_x64 core.
     */
    EJS_core: Extract<PlatformId, "c64"> | Extract<CoreName, "vice_x64">
  },
  {
    /**
     * If set to amiga, emulator will use the puae core.
     */
    EJS_core: Extract<PlatformId, "amiga"> | Extract<CoreName, "puae">
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

export type Bios = {
  name: BiosName
  description: string | undefined
  url: string | undefined
}

export type Platform = {
  id: PlatformId
  name: string
  cores: CoreName[]
  bioses?: Omit<Bios, "url">[]
}

export type BiosesUrls = Record<BiosName, string | undefined>

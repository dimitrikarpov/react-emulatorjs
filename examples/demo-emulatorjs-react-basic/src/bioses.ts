// https://cdn.jsdelivr.net/gh/jquery/jquery/

export type Bios = {
  name: string
  url: string
  core: string
  description: string
}

const bioses: Bios[] = [
  // "3do|opera"
  {
    name: "panafz1.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz1.bin",
    core: "3do|opera",
    description: "Panasonic FZ-1",
  },
  {
    name: "panafz10.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz10.bin",
    core: "3do|opera",
    description: "Panasonic FZ-10",
  },
  {
    name: "panafz10-norsa.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz10-norsa.bin",
    core: "3do|opera",
    description: "Panasonic FZ-10 [RSA Patch]",
  },
  {
    name: "panafz10e-anvil.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz10e-anvil.bin",
    core: "3do|opera",
    description: "Panasonic FZ-10-E [Anvil]",
  },
  {
    name: "panafz10e-anvil-norsa.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz10e-anvil-norsa.bin",
    core: "3do|opera",
    description: "Panasonic FZ-10-E [Anvil RSA Patch]",
  },
  {
    name: "panafz1j.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz1j.bin",
    core: "3do|opera",
    description: "Panasonic FZ-1J",
  },
  {
    name: "panafz1j-norsa.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/panafz1j-norsa.bin",
    core: "3do|opera",
    description: "Panasonic FZ-1J [RSA Patch]",
  },
  {
    name: "goldstar.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/goldstar.bin",
    core: "3do|opera",
    description: "Goldstar GDO-101M",
  },
  {
    name: "sanyotry.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/sanyotry.bin",
    core: "3do|opera",
    description: "Sanyo IMP-21J TRY",
  },
  {
    name: "3do_arcade_saot.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/3DO%20Company%2C%20The%20-%203DO/3do_arcade_saot.bin",
    core: "3do|opera",
    description: "Shootout At Old Tucson",
  },

  // "atari7800|prosystem",
  {
    name: "7800 BIOS (U).rom",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Atari%20-%207800/7800%20BIOS%20(U).rom",
    core: "atari7800|prosystem",
    description: "7800 BIOS - Optional",
  },

  // "lynx|handy",
  {
    name: "lynxboot.img",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Atari%20-%20Lynx/lynxboot.img",
    core: "lynx|handy",
    description: "Lynx Boot Image - Required",
  },

  // "nes|fceumm|nestopia",
  {
    name: "disksys.rom",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Famicom%20Disk%20System/disksys.rom",
    core: "nes|fceumm|nestopia",
    description:
      "Family Computer Disk System BIOS - Required for Famicom Disk System emulation",
  },
  {
    name: "gamegenie.nes",
    url: "",
    core: "nes|fceumm|nestopia",
    description:
      "Game Genie add-on cartridge - Required for Game Genei Add-on emulation (Only supported on the fceumm core)",
  }, // not found

  // "nds|melonds|desmume2015"
  {
    name: "bios7.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Nintendo%20DS/bios7.bin",
    core: "nds|melonds|desmume2015",
    description: "NDS ARM7 BIOS - Required",
  },
  {
    name: "bios9.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Nintendo%20DS/bios9.bin",
    core: "nds|melonds|desmume2015",
    description: "NDS ARM9 BIOS - Required",
  },
  {
    name: "firmware.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Nintendo%20DS/firmware.bin",
    core: "nds|melonds|desmume2015",
    description: "NDS Firmware - Required",
  },
  {
    name: "dsi_bios7.bin",
    url: "",
    core: "nds|melonds|desmume2015",
    description: "DSi ARM7 BIOS - Optional",
  }, // not found
  {
    name: "dsi_bios9.bin",
    url: "",
    core: "nds|melonds|desmume2015",
    description: "DSi ARM9 BIOS - Optional",
  }, // not found
  {
    name: "dsi_firmware.bin",
    url: "",
    core: "nds|melonds|desmume2015",
    description: "DSi Firmware - Optional",
  }, // not found
  {
    name: "dsi_nand.bin",
    url: "",
    core: "nds|melonds|desmume2015",
    description: "DSi NAND - Optional",
  }, // not found
  {
    name: "dsi_sd_card.bin",
    url: "",
    core: "nds|melonds|desmume2015",
    description: "DSi SD Card - Optional",
  }, // not found

  // "gba|mgba|gambatte",
  {
    name: "gb_bios.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Gameboy/gb_bios.bin",
    core: "gba|mgba",
    description: "Game Boy BIOS - Optional",
  },
  {
    name: "gbc_bios.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Gameboy%20Color/gbc_bios.bin",
    core: "gb|mgba|gambatte",
    description: "Game Boy Color BIOS - Optional",
  },
  {
    name: "gba_bios.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Game%20Boy%20Advance/gba_bios.bin",
    core: "gba|mgba",
    description: "Game Boy Advance BIOS - Optional",
  },
  {
    name: "sgb_bios.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Super%20Game%20Boy/sgb_bios.bin",
    core: "gba|mgba",
    description: "Super Game Boy BIOS - Optional",
  },

  // "psx|mednafen_psx|pcsx_rearmed"
  {
    name: "scph5500.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph5500.bin",
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "PS1 JP BIOS - Required for JP games",
  },
  {
    name: "scph5501.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph5501.bin",
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "PS1 US BIOS - Required for US games",
  },
  {
    name: "scph5502.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph5502.bin",
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "PS1 EU BIOS - Required for EU games",
  },
  {
    name: "PSXONPSP660.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/PSXONPSP660.bin", // not found
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "Extracted from a PSP",
  },
  {
    name: "scph101.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph101.bin",
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "Version 4.4 03/24/00 A",
  },
  {
    name: "scph7001.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph7001.bin",
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "Version 4.1 12/16/97 A",
  },
  {
    name: "scph1001.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sony%20-%20PlayStation/scph1001.bin",
    core: "psx|mednafen_psx|pcsx_rearmed",
    description: "Version 2.0 05/07/95 A",
  },

  // "segaCD|genesis_plus_gx|picodrive"
  {
    name: "bios_CD_E.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Mega%20CD%20-%20Sega%20CD/bios_CD_E.bin",
    core: "segaCD|genesis_plus_gx|picodrive",
    description: "MegaCD EU BIOS - Required",
  },
  {
    name: "bios_CD_U.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Mega%20CD%20-%20Sega%20CD/bios_CD_U.bin",
    core: "segaCD|genesis_plus_gx|picodrive",
    description: "SegaCD US BIOS - Required",
  },
  {
    name: "bios_CD_J.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Mega%20CD%20-%20Sega%20CD/bios_CD_J.bin",
    core: "segaCD|genesis_plus_gx|picodrive",
    description: "MegaCD JP BIOS - Required",
  },

  // "segaGG|genesis_plus_gx"
  {
    name: "bios.gg",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Game%20Gear/bios.gg",
    core: "segaGG|genesis_plus_gx",
    description: "GameGear BIOS (bootrom) - Optional",
  },

  // "segaMS|genesis_plus_gx|picodrive"
  {
    name: "bios_E.sms",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Master%20System%20-%20Mark%20III/bios_E.sms",
    core: "segaMS|genesis_plus_gx|picodrive",
    description: "MasterSystem EU BIOS",
  },
  {
    name: "bios_U.sms",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Master%20System%20-%20Mark%20III/bios_U.sms",
    core: "segaMS|genesis_plus_gx|picodrive",
    description: "MasterSystem US BIOS",
  },
  {
    name: "bios_J.sms",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Master%20System%20-%20Mark%20III/bios_J.sms",
    core: "segaMS|genesis_plus_gx|picodrive",
    description: "MasterSystem JP BIOS",
  },

  // "segaMD|genesis_plus_gx|picodrive"
  {
    name: "bios_MD.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Mega%20Drive%20-%20Genesis/bios_MD.bin",
    core: "segaMD|genesis_plus_gx|picodrive",
    description: "MegaDrive TMSS startup ROM",
  },

  //  "segaSaturn|yabause"
  {
    name: "saturn_bios.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Sega%20-%20Saturn/saturn_bios.bin",
    core: "segaSaturn|yabause",
    description: "Saturn BIOS",
  },

  // "snes|snes9x"
  {
    name: "BS-X.bin",
    url: "https://cdn.statically.io/gh/Abdess/retroarch_system/libretro/Nintendo%20-%20Satellaview/BS-X.bin",
    core: "snes|snes9x",
    description:
      "BS-X - Sore wa Namae o Nusumareta Machi no Monogatari (Japan) (Rev 1) - Optional",
  },
  {
    name: "STBIOS.bin",
    url: "https://github.com/Abdess/retroarch_system/blob/libretro/Nintendo%20-%20SuFami%20Turbo/STBIOS.bin",
    core: "snes|snes9x",
    description: "Sufami Turbo (Japan) - Optional",
  },
]

export const findCoreBioses = (core: string) => {
  return bioses.filter(({ core: cores }) => {
    return cores.split("|").includes(core)
  })
}

import { Platform } from "./types"

export const platforms: Platform[] = [
  {
    id: "3do",
    name: "3DO",
    cores: ["opera"],
    bioses: [
      {
        name: "panafz1.bin",
        description: "Panasonic FZ-1",
      },
      {
        name: "panafz10.bin",
        description: "Panasonic FZ-10",
      },
      {
        name: "panafz10-norsa.bin",
        description: "Panasonic FZ-10 [RSA Patch]",
      },
      {
        name: "panafz10e-anvil.bin",
        description: "Panasonic FZ-10-E [Anvil]",
      },
      {
        name: "panafz10e-anvil-norsa.bin",
        description: "Panasonic FZ-10-E [Anvil RSA Patch]",
      },
      {
        name: "panafz1j.bin",
        description: "Panasonic FZ-1J",
      },
      {
        name: "panafz1j-norsa.bin",
        description: "Panasonic FZ-1J [RSA Patch]",
      },
      {
        name: "goldstar.bin",
        description: "Goldstar GDO-101M",
      },
      {
        name: "sanyotry.bin",
        description: "Sanyo IMP-21J TRY",
      },
      {
        name: "3do_arcade_saot.bin",
        description: "Shootout At Old Tucson",
      },
    ],
  },
  {
    id: "arcade",
    name: "Arcade",
    cores: ["fbneo", "fbalpha2012_cps1", "fbalpha2012_cps2"],
  },
  {
    id: "atari2600",
    name: "Atari 2600",
    cores: ["stella2014"],
  },
  {
    id: "atari5200",
    name: "Atari 5200",
    cores: ["a5200"],
  },
  {
    id: "atari7800",
    name: "Atari 7800",
    cores: ["prosystem"],
    bioses: [
      {
        name: "7800 BIOS (U).rom",
        description: "7800 BIOS - Optional",
      },
    ],
  },
  {
    id: "jaguar",
    name: "Atari Jaguar",
    cores: ["virtualjaguar"],
  },
  {
    id: "lynx",
    name: "Atari Lynx",
    cores: ["handy"],
    bioses: [
      {
        name: "lynxboot.img",
        description: "Lynx Boot Image - Required",
      },
    ],
  },
  {
    id: "mame2003",
    name: "MAME 2003",
    cores: ["mame2003"],
  },
  {
    id: "nes",
    name: "NES / Famicom",
    cores: ["fceumm", "nestopia"],
    bioses: [
      {
        name: "disksys.rom",
        description:
          "Family Computer Disk System BIOS - Required for Famicom Disk System emulation",
      },
      {
        name: "gamegenie.nes",
        description:
          "Game Genie add-on cartridge - Required for Game Genei Add-on emulation (Only supported on the fceumm core)",
      },
    ],
  },
  {
    id: "n64",
    name: "Nintendo 64",
    cores: ["mupen64plus_next"],
  },
  {
    id: "nds",
    name: "Nintendo DS",
    cores: ["melonds", "desmume2015"],
    bioses: [
      {
        name: "bios7.bin",
        description: "NDS ARM7 BIOS - Required",
      },
      {
        name: "bios9.bin",
        description: "NDS ARM9 BIOS - Required",
      },
      {
        name: "firmware.bin",
        description: "NDS Firmware - Required",
      },
      {
        name: "dsi_bios7.bin",
        description: "DSi ARM7 BIOS - Optional",
      },
      {
        name: "dsi_bios9.bin",
        description: "DSi ARM9 BIOS - Optional",
      },
      {
        name: "dsi_firmware.bin",
        description: "DSi Firmware - Optional",
      },
      {
        name: "dsi_nand.bin",
        description: "DSi NAND - Optional",
      },
      {
        name: "dsi_sd_card.bin",
        description: "DSi SD Card - Optional",
      },
    ],
  },
  {
    id: "gba",
    name: "Nintendo GameBoy Advance",
    cores: ["mgba"],
    bioses: [
      {
        name: "gb_bios.bin",
        description: "Game Boy BIOS - Optional",
      },
      {
        name: "gbc_bios.bin",
        description: "Game Boy Color BIOS - Optional",
      },
      {
        name: "gba_bios.bin",
        description: "Game Boy Advance BIOS - Optional",
      },
      {
        name: "sgb_bios.bin",
        description: "Super Game Boy BIOS - Optional",
      },
    ],
  },
  {
    id: "gb",
    name: "Nintendo GameBoy",
    cores: ["gambatte", "mgba"],
  },
  {
    id: "psx",
    name: "PlayStation",
    cores: ["mednafen_psx", "pcsx_rearmed"],
    bioses: [
      {
        name: "scph5500.bin",
        description: "PS1 JP BIOS - Required for JP games",
      },
      {
        name: "scph5501.bin",
        description: "PS1 US BIOS - Required for US games",
      },
      {
        name: "scph5502.bin",
        description: "PS1 EU BIOS - Required for EU games",
      },
      {
        name: "PSXONPSP660.bin",
        description: "Extracted from a PSP",
      },
      {
        name: "scph101.bin",
        description: "Version 4.4 03/24/00 A",
      },
      {
        name: "scph7001.bin",
        description: "Version 4.1 12/16/97 A",
      },
      {
        name: "scph1001.bin",
        description: "Version 2.0 05/07/95 A",
      },
    ],
  },
  {
    id: "sega32x",
    name: "Sega 32X",
    cores: ["picodrive"],
  },
  {
    id: "segaCD",
    name: "Sega CD",
    cores: ["genesis_plus_gx", "picodrive"],
    bioses: [
      {
        name: "bios_CD_E.bin",
        description: "MegaCD EU BIOS - Required",
      },
      {
        name: "bios_CD_U.bin",
        description: "SegaCD US BIOS - Required",
      },
      {
        name: "bios_CD_J.bin",
        description: "MegaCD JP BIOS - Required",
      },
    ],
  },
  {
    id: "segaGG",
    name: "Sega Game Gear",
    cores: ["genesis_plus_gx"],
    bioses: [
      {
        name: "bios.gg",
        description: "GameGear BIOS (bootrom) - Optional",
      },
    ],
  },
  {
    id: "segaMS",
    name: "Sega Master System",
    cores: ["genesis_plus_gx", "picodrive"],
    bioses: [
      {
        name: "bios_E.sms",
        description: "MasterSystem EU BIOS",
      },
      {
        name: "bios_U.sms",
        description: "MasterSystem US BIOS",
      },
      {
        name: "bios_J.sms",
        description: "MasterSystem JP BIOS",
      },
    ],
  },
  {
    id: "segaMD",
    name: "Sega Mega Drive",
    cores: ["genesis_plus_gx", "picodrive"],
    bioses: [
      {
        name: "bios_MD.bin",
        description: "MegaDrive TMSS startup ROM",
      },
    ],
  },
  {
    id: "segaSaturn",
    name: "Sega Saturn",
    cores: ["yabause"],
    bioses: [
      {
        name: "saturn_bios.bin",
        description: "Saturn BIOS",
      },
    ],
  },
  {
    id: "snes",
    name: "SNES",
    cores: ["snes9x"],
    bioses: [
      {
        name: "BS-X.bin",
        description:
          "BS-X - Sore wa Namae o Nusumareta Machi no Monogatari (Japan) (Rev 1) - Optional",
      },
      {
        name: "STBIOS.bin",
        description: "Sufami Turbo (Japan) - Optional",
      },
    ],
  },
  {
    id: "vb",
    name: "Virtual Boy",
    cores: ["beetle_vb"],
  },
  {
    id: "pce",
    name: "PC Engine/TurboGrafx 16 (CD)/SuperGrafx",
    cores: ["mednafen_pce"],
  },
  {
    id: "pcfx",
    name: "PC-FX",
    cores: ["mednafen_pcfx"],
  },
  {
    id: "ngp",
    name: "Neo Geo Pocket (Color)",
    cores: ["mednafen_ngp"],
  },
  {
    id: "ws",
    name: "WonderSwan",
    cores: ["mednafen_wswan"],
  },
  {
    id: "coleco",
    name: "ColecoVision",
    cores: ["gearcoleco"],
  },
  {
    id: "c64",
    name: "Commodore 64",
    cores: ["vice_x64"],
  },
  {
    id: "amiga",
    name: "Commodore - Amiga",
    cores: ["puae"],
  },
]

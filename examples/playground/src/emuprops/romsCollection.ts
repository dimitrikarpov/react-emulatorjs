import { CoreName } from "react-emulatorjs"

type RomCollectionItem = {
  url: string
  name: string
  core: CoreName
  site: string
}

export const romsCollection: RomCollectionItem[] = [
  {
    url: "roms/Spacegulls-1.1.zip",
    name: "Spacegulls",
    core: "fceumm",
    site: "https://morphcatgames.itch.io/spacegulls",
  },
  {
    url: "roms/Super_JetPak_DX_DMG-SJPD-UKV.zip",
    name: "Super Jetpack DX",
    core: "gambatte",
    site: "https://asobitech.itch.io/super-jetpak-dx",
  },
  {
    url: "roms/R-Type_Demo_1_3.7z",
    name: "Mega R-Type™ DEMO",
    core: "genesis_plus_gx",
    site: "https://theroboz.itch.io/mega-r-type",
  },
  {
    url: "roms/Indivisible.7z",
    name: "Indivisible",
    core: "nestopia",
    site: "https://kasumi.itch.io/indivisible",
  },
] as const

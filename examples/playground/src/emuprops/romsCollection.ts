import { CoreName } from "react-emulatorjs"

type RomCollectionItem = {
  url: string
  name: string
  core: CoreName
  platform: string
  site: string
  picture: string
}

export const romsCollection: RomCollectionItem[] = [
  {
    url: "roms/Spacegulls-1.1.zip",
    name: "Spacegulls",
    core: "fceumm",
    platform: "NES",
    site: "https://morphcatgames.itch.io/spacegulls",
    picture: "https://img.itch.zone/aW1nLzU2MDEyNjQuZ2lm/original/9KteA0.gif",
  },
  {
    url: "roms/Super_JetPak_DX_DMG-SJPD-UKV.zip",
    name: "Super Jetpack DX",
    core: "gambatte",
    platform: "GameBoy",
    site: "https://asobitech.itch.io/super-jetpak-dx",
    picture:
      "https://img.itch.zone/aW1hZ2UvMjIzOTkzNi8xMzI2NzkwNC5wbmc=/original/6ummDx.png",
  },
  {
    url: "roms/R-Type_Demo_1_3.7z",
    name: "Mega R-Type™ DEMO",
    core: "genesis_plus_gx",
    platform: "Sega MD",
    site: "https://theroboz.itch.io/mega-r-type",
    picture:
      "https://img.itch.zone/aW1hZ2UvMjI4NzI3Ny8xMzU1NTMzMC5wbmc=/original/O7rSEP.png",
  },
  {
    url: "roms/Indivisible.7z",
    name: "Indivisible",
    core: "nestopia",
    platform: "NES",
    site: "https://kasumi.itch.io/indivisible",
    picture:
      "https://img.itch.zone/aW1hZ2UvMTY2NjQ3Lzc5MzA4MC5naWY=/original/mit9uM.gif",
  },
] as const

export const getCollectionItemByUrl = (url: string) => {
  const found = romsCollection.find((item) => item.url === url)

  if (!found) throw "ROM not found in Collection"

  return found
}

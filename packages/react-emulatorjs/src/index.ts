export { Emulator } from "./Emulator"
export type {
  Settings,
  EJS_core,
  PlatformId,
  CoreName,
  BiosName,
  Bios,
} from "./types"

export { platforms } from "./platforms"
export { defaultBiosesUrls } from "./defaultBiosesUrls"
export { defaultPathToData } from "./defaultPathToData"
export { getPlatforms, findCoreBioses, isBios } from "./utils"

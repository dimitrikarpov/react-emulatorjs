export { EmulatorJS } from "./EmulatorJS"
export type {
  Settings,
  EJS_core,
  PlatformId,
  CoreName,
  BiosName,
  Bios,
  Language,
} from "./types"

export { platforms } from "./platforms"
export { defaultBiosesUrls } from "./defaultBiosesUrls"
export { defaultPathToData, cdnPathToDataUrls } from "./defaultPathToData"
export { getPlatforms, findCoreBioses, isBios } from "./utils"
export { languages } from "./languages"

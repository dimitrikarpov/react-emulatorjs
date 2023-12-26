import { defaultBiosesUrls } from "./defaultBiosesUrls"
import { platforms } from "./platforms"
import { Bios, BiosesUrls, EJS_core } from "./types"

export const getPlatforms = (biosesUrls: BiosesUrls = defaultBiosesUrls) => {
  return platforms.map((platform) => ({
    ...platform,
    bioses: platform.bioses?.map((bios) => ({
      ...bios,
      url: biosesUrls[bios.name],
    })),
  }))
}

export const isBios = (value: unknown): value is Bios => {
  if (
    value &&
    typeof value === "object" &&
    "name" in value &&
    "descriptions" in value &&
    "url" in value
  )
    return true

  return false
}

export const findCoreBioses = (
  core: EJS_core,
  biosesUrls: BiosesUrls = defaultBiosesUrls,
) => {
  const platforms = getPlatforms(biosesUrls)

  const foundByPlatformId = platforms.find(({ id }) => id === core)

  if (foundByPlatformId && foundByPlatformId.bioses)
    return foundByPlatformId.bioses

  const foundByPlatformCore = platforms.find(({ cores }) =>
    // @ts-ignore
    cores.includes(core),
  )

  if (foundByPlatformCore && foundByPlatformCore.bioses)
    return foundByPlatformCore.bioses
}

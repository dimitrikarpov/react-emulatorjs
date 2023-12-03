import { defaultBiosesUrls } from "./defaultBiosesUrls"
import { platforms } from "./platforms"
import { BiosesUrls, EJS_core } from "./types"

export const getPlatforms = (biosesUrls: BiosesUrls = defaultBiosesUrls) => {
  return platforms.map((platform) => ({
    ...platform,
    bioses: platform.bioses?.map((bios) => ({
      ...bios,
      url: biosesUrls[bios.name],
    })),
  }))
}

export const findCoreBioses = (
  core: EJS_core,
  biosesUrls: BiosesUrls = defaultBiosesUrls,
) => {
  const platforms = getPlatforms(biosesUrls)

  const foundAsPlatformId = platforms.find(({ id }) => id === core)

  if (foundAsPlatformId) return foundAsPlatformId.bioses
  const foundAsPlatformCore = platforms.find(({ cores }) =>
    // @ts-ignore
    cores.includes(core),
  )
  return foundAsPlatformCore?.bioses
}

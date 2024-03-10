export const cdnPathToDataUrls = [
  "https://cdn.emulatorjs.org/stable/data",
  "https://cdn.emulatorjs.org/latest/data",
  "https://cdn.emulatorjs.org/nightly/data",
] as const

export const defaultPathToData = cdnPathToDataUrls[0]

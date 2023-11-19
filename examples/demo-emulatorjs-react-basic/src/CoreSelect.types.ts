import type { EJS_core } from "emulatorjs-react"
import { platforms } from "./CoreSelect.constants"

type Platforms = typeof platforms
type AvailableCores = Platforms[keyof Platforms][number]
type Difference = Extract<EJS_core, AvailableCores>
export type CoreSelectOption = Extract<EJS_core, Difference>

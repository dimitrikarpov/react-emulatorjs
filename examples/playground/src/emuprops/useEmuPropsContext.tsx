import { useContext } from "react"
import { EmuPropsContext } from "./EmuPropsContext"

export const useEmuPropsContext = () => {
  const context = useContext(EmuPropsContext)

  if (!context) {
    throw new Error(
      "useEmuPropsContext must be used inside the EmuPropsProvider",
    )
  }

  return context
}

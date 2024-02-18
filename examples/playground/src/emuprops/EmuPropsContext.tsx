import { createContext, useReducer, useState } from "react"
import { EJS_core, Settings } from "react-emulatorjs"
import {
  FormAction,
  FormState,
  formInitialState,
  formReducer,
} from "./formReducer"
import { getEmuProps } from "./getEmuProps"

type EmuPropsContextType = {
  formState: FormState
  dispatch: React.Dispatch<FormAction>
  emuProps: Settings
  isEmulatorDialogOpen: boolean
  setIsEmulatorDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  onEmulatorDialogToggle: (open: boolean) => void
  onPlatformChange: (platform: EJS_core) => void
}

export const EmuPropsContext = createContext<EmuPropsContextType | null>(null)

type Props = {
  children?: React.ReactNode
}

export const EmuPropsProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [isEmulatorDialogOpen, setIsEmulatorDialogOpen] = useState(false)
  const [formState, dispatch] = useReducer(formReducer, formInitialState)
  const emuProps = getEmuProps(formState)

  const onEmulatorDialogToggle = (open: boolean) => {
    setIsEmulatorDialogOpen(open)
  }

  const onPlatformChange = (platform: EJS_core) => {
    dispatch({ type: "setPlatform", payload: platform })
    dispatch({ type: "setBiosUrl", payload: undefined })
  }

  return (
    <EmuPropsContext.Provider
      value={{
        formState,
        dispatch,
        isEmulatorDialogOpen,
        setIsEmulatorDialogOpen,
        onEmulatorDialogToggle,
        onPlatformChange,
        emuProps,
      }}
    >
      {children}
    </EmuPropsContext.Provider>
  )
}

import { Settings } from "react-emulatorjs"

export type PropItemName = keyof Settings
export type PropItemValue = Settings[PropItemName]

export type PropItemProps = {
  name: PropItemName
  value: PropItemValue
}

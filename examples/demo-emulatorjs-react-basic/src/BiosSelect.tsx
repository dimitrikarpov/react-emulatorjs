import { EJS_core, findCoreBioses } from "emulatorjs-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./@/components/ui/select"
// import { CoreSelectOption } from "./CoreSelect.types"

type Props = {
  core: EJS_core
  value: string | undefined
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const BiosSelect: React.FunctionComponent<Props> = ({
  core,
  value = "none",
  onChange,
}) => {
  const bioses = findCoreBioses(core)?.filter(({ url }) => Boolean(url))

  if (!bioses || bioses.length === 0) return null

  const onChangeSelect = (value: string) => {
    onChange(value === "none" ? undefined : value)
  }

  return (
    <>
      <Select onValueChange={onChangeSelect} value={value} defaultValue="none">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="select bios..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">without bios</SelectItem>
          {bioses.map((bios) =>
            bios.url ? (
              <SelectItem key={bios.name} value={bios.url}>
                {bios.name}
              </SelectItem>
            ) : null,
          )}
        </SelectContent>
      </Select>
    </>
  )
}

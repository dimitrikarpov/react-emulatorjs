import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const SizeSelect = () => {
  const {
    formState: { width, height },
    dispatch,
  } = useEmuPropsContext()

  const onValueChange = (value: string) => {
    const [width, height] = value.split(":")

    dispatch({ type: "setWidth", payload: Number(width) })
    dispatch({ type: "setHeight", payload: Number(height) })
  }

  const displayValue = Boolean(width) && Boolean(height)

  return (
    <div className="flex gap-5 items-center">
      <div>SIZE</div>

      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select emulator size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="640:480">640 X 480</SelectItem>
          <SelectItem value="800:600">800 X 600</SelectItem>
        </SelectContent>
      </Select>

      {displayValue && (
        <div>
          {width} X {height}
        </div>
      )}
    </div>
  )
}

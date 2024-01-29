import { Label } from "../../@/components/ui/label"
import { Switch } from "../../@/components/ui/switch"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const DebugSwitch = () => {
  const {
    formState: { debug: value },
    dispatch,
  } = useEmuPropsContext()

  const onCheckedChange = (checked: boolean) => {
    dispatch({ type: "setDebug", payload: checked })
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="debug" className="pr-[76px]">
        Debug
      </Label>
      <Switch id="debug" checked={value} onCheckedChange={onCheckedChange} />
    </div>
  )
}

import { Label } from "../../@/components/ui/label"
import { Switch } from "../../@/components/ui/switch"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const StartOnLoadedSwitch = () => {
  const {
    formState: { startOnLoaded: value },
    dispatch,
  } = useEmuPropsContext()

  const onCheckedChange = (checked: boolean) => {
    dispatch({ type: "setStartOnLoaded", payload: checked })
  }

  return (
    <div className="flex items-center space-x-2">
      <Label className="pr-[17px]" htmlFor="fullscrn">
        Start on loaded
      </Label>
      <Switch id="fullscrn" checked={value} onCheckedChange={onCheckedChange} />
    </div>
  )
}

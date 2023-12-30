import { Label } from "../../@/components/ui/label"
import { Switch } from "../../@/components/ui/switch"
import { useEmuPropsContext } from "../../useEmuPropsContext"

export const StartOnLoadedSwitch = () => {
  const { startOnLoaded: value, setStartOnLoaded: onCheckedChange } =
    useEmuPropsContext()

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="fullscrn">Start on loaded</Label>
      <Switch id="fullscrn" checked={value} onCheckedChange={onCheckedChange} />
    </div>
  )
}

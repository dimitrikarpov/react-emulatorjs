import { Label } from "../../@/components/ui/label"
import { Switch } from "../../@/components/ui/switch"
import { useEmuPropsContext } from "../../useEmuPropsContext"

export const DebugSwitch = () => {
  const { debug: value, setDebug: onCheckedChange } = useEmuPropsContext()

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="debug">Debug</Label>
      <Switch id="debug" checked={value} onCheckedChange={onCheckedChange} />
    </div>
  )
}

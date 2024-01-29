import { Switch } from "../../@/components/ui/switch"
import { Label } from "../../@/components/ui/label"
import { Button } from "../../@/components/ui/button"
import { defaultButtons, isButtonsInDefaultState } from "../../@/lib/buttons"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const ButtonsSelect = () => {
  const {
    formState: { buttons },
    dispatch,
  } = useEmuPropsContext()

  const onCheckedChange = (button: string, checked: boolean) => {
    dispatch({ type: "setButtons", payload: { ...buttons, [button]: checked } })
  }

  const onReset = () => {
    dispatch({ type: "setButtons", payload: defaultButtons })
  }

  const equalsDefault = isButtonsInDefaultState(buttons)

  return (
    <>
      <div className="grid grid-cols-4 gap-y-4">
        {Object.entries(buttons).map(([button, checked]) => (
          <div key={button} className="flex items-center space-x-3">
            <Switch
              id={button}
              checked={checked}
              onCheckedChange={(checked) => onCheckedChange(button, checked)}
            />
            <Label htmlFor={button}>{button}</Label>
          </div>
        ))}
      </div>

      <Button onClick={onReset} disabled={equalsDefault} variant={"outline"}>
        Reset to defaults
      </Button>
    </>
  )
}

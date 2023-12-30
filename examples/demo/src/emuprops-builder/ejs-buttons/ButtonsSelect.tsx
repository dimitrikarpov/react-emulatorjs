import { useState } from "react"
import { Switch } from "../../@/components/ui/switch"
import { Label } from "../../@/components/ui/label"
import { Button } from "../../@/components/ui/button"
import {
  type EJS_Buttons,
  defaultButtons,
  isButtonsInDefaultState,
} from "../../@/lib/buttons"

export const ButtonsSelect = () => {
  const [buttons, setButtons] = useState<EJS_Buttons>(defaultButtons)

  const onCheckedChange = (button: string, checked: boolean) => {
    setButtons((prev) => ({ ...prev, [button]: checked }))
  }

  const onReset = () => {
    setButtons(defaultButtons)
  }

  const equalsDefault = isButtonsInDefaultState(buttons)

  return (
    <>
      {Object.entries(buttons).map(([button, checked]) => (
        <div className="flex items-center space-x-2" key={button}>
          <Switch
            id={button}
            checked={checked}
            onCheckedChange={(checked) => onCheckedChange(button, checked)}
          />
          <Label htmlFor={button}>{button}</Label>
        </div>
      ))}

      <Button onClick={onReset} disabled={equalsDefault} variant={"outline"}>
        Reset to defaults
      </Button>
    </>
  )
}

/*

  EJS_Buttons?: {
    restart?: boolean
    playPause?: boolean
    saveState?: boolean
    loadState?: boolean
    gamepad?: boolean
    cheat?: boolean
    cacheManager?: boolean




    mute?: boolean
    volume?: boolean
    settings?: boolean
    fullscreen?: boolean

    saveSavFiles?: boolean
    loadSavFiles?: boolean

    quickSave?: boolean
    quickLoad?: boolean
    ----------------------
    screenRecord?: boolean
    screenshot?: boolean
  }

*/

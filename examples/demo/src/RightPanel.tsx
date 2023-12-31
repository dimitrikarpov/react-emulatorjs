import { useEmuPropsContext } from "./useEmuPropsContext"
import { PropItem } from "./emuprops-viewer/PropItem"
import { Settings } from "react-emulatorjs"

export const RightPanel = () => {
  const { emuProps } = useEmuPropsContext()

  return (
    <div className="text-left">
      <div className="text-[#8458fe]">&lt;Emulator</div>
      {Object.entries(emuProps).map(([key, value]) => (
        <PropItem key={key} name={key as keyof Settings} value={value} />
      ))}

      <div className="text-[#a081fc]">/&gt;</div>
    </div>
  )
}

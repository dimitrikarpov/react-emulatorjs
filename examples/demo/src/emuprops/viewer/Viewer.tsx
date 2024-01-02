import { PropItem } from "./PropItem"
import { useEmuPropsContext } from "../useEmuPropsContext"
import { Settings } from "react-emulatorjs"

export const Viewer = () => {
  const { emuProps } = useEmuPropsContext()

  return (
    <div className="bg-[#ebeef500] w-full">
      <div className="text-left">
        <div className="text-[#8458fe]">&lt;EmulatorJS</div>
        {Object.entries(emuProps).map(([key, value]) => (
          <PropItem key={key} name={key as keyof Settings} value={value} />
        ))}

        <div className="text-[#a081fc]">/&gt;</div>
      </div>
    </div>
  )
}

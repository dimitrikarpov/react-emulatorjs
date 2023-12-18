import { Settings } from "react-emulatorjs"
import { cn } from "./@/lib/utils"

type Props = {
  emuProps: Settings
}

export const RightPanel: React.FunctionComponent<Props> = ({ emuProps }) => {
  const ejsProps = clearProps(emuProps)

  console.log({ ejsProps })

  return (
    <div className="text-left">
      <div className="text-[#8458fe]">&lt;Emulator</div>
      {Object.entries(ejsProps).map(([key, value]) => (
        <div key={key} className="pl-4 whitespace-nowrap">
          <span
            className={cn(
              "text-[#2c4ba3]",
              key === "EJS_gameUrl" &&
                !value &&
                "underline decoration-wavy decoration-red-500",
            )}
          >
            {key}
          </span>
          <span> = </span>
          <span className="text-[#c940c8]">{JSON.stringify(value)}</span>
        </div>
      ))}

      <div className="text-[#a081fc]">/&gt;</div>
    </div>
  )
}

const clearProps = (emuProps: Settings) => {
  const props = structuredClone(emuProps)

  if (props.EJS_gameUrl) {
    props.EJS_gameUrl = "https://somegame.rom"
  }

  return props
}

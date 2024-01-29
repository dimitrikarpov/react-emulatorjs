import { EJS_Buttons, isButtonsInDefaultState } from "../../@/lib/buttons"
import { useEmuPropsContext } from "../useEmuPropsContext"
import { PropItemProps } from "./types"

export const PropItemButtons: React.FunctionComponent<PropItemProps> = ({
  name,
  value,
}) => {
  const {
    formState: { buttons },
  } = useEmuPropsContext()
  const equalsDefault = isButtonsInDefaultState(buttons)

  if (equalsDefault) return null

  return (
    <>
      <div className="pl-4 whitespace-nowrap">
        <span className="text-[#2c4ba3]">{name}</span>
        <span> = </span>
        <span className="text-[#c940c8]">&#123;&#123;</span>
      </div>

      {Object.entries(value as EJS_Buttons).map(([name, value]) => (
        <div className="pl-12" key={name}>
          <span className="text-[#2c4ba3]">{name}</span>
          <span> : </span>
          <span className="text-[#c940c8]">{value ? "true" : "false"},</span>
        </div>
      ))}

      <div className="pl-4 whitespace-nowrap">
        <span className="text-[#c940c8]">&#125;&#125;</span>
      </div>
    </>
  )
}

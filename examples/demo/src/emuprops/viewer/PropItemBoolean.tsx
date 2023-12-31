import { PropItemProps } from "./types"

export const PropItemBoolean: React.FunctionComponent<PropItemProps> = ({
  name,
  value,
}) => {
  if (!value) return null

  return (
    <div className="pl-4 whitespace-nowrap">
      <span className="text-[#2c4ba3]">{name}</span>
    </div>
  )
}

import { PropItemProps } from "./types"

export const PropItemString: React.FunctionComponent<PropItemProps> = ({
  name,
  value,
}) => {
  return (
    <div className="pl-4 whitespace-nowrap">
      <span className="text-[#2c4ba3]">{name}</span>
      <span> = </span>
      <span className="text-[#c940c8]">{JSON.stringify(value)}</span>
    </div>
  )
}

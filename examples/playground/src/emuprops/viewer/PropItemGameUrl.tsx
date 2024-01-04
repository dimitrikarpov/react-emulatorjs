import { cn } from "../../@/lib/utils"
import { PropItemProps } from "./types"

export const PropItemGameUrl: React.FunctionComponent<PropItemProps> = ({
  name,
  value,
}) => {
  return (
    <div className="pl-4 whitespace-nowrap">
      <span
        className={cn(
          "text-[#2c4ba3]",
          !value && "underline decoration-wavy decoration-red-500",
        )}
      >
        {name}
      </span>
      <span> = </span>
      <span className="text-[#c940c8]">{JSON.stringify(value)}</span>
    </div>
  )
}

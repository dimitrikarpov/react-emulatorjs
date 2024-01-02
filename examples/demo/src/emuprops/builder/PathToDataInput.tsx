import { pathToDataLinks } from "../../@/lib/path-to-data"
import { useEmuPropsContext } from "../useEmuPropsContext"

type Props = {
  onSelect: (value: string) => void
}

export const PathToDataInput: React.FunctionComponent<Props> = ({
  onSelect,
}) => {
  const { pathToData } = useEmuPropsContext()

  return (
    <div className="flex flex-col flex-wrap gap-3">
      {pathToDataLinks.map((path) => (
        <div key={path}>
          <input
            type="radio"
            id={path}
            value={undefined}
            onChange={() => onSelect(path)}
            checked={path === pathToData}
          />
          <label htmlFor={path} className="pl-3">
            {path}
          </label>
        </div>
      ))}
    </div>
  )
}

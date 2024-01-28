import { defaultPathToData } from "react-emulatorjs"
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
      {[
        defaultPathToData,
        "https://cdn.emulatorjs.org/stable/data",
        "https://cdn.emulatorjs.org/latest/data",
        "https://cdn.emulatorjs.org/nightly/data",
        "/data",
      ].map((path) => (
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

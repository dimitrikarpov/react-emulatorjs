import { languages } from "react-emulatorjs"
import { useEmuPropsContext } from "../useEmuPropsContext"

type Props = {
  onSelect: (value: string) => void
}

export const LanguageInput: React.FunctionComponent<Props> = ({ onSelect }) => {
  const {
    formState: { language },
  } = useEmuPropsContext()

  console.log({ language })

  return (
    <div className="flex flex-col flex-wrap gap-3">
      {Object.entries(languages).map(([key, value]) => (
        <div key={key}>
          <input
            type="radio"
            id={key}
            value={undefined}
            onChange={() => onSelect(key)}
            checked={key === language}
          />
          <label htmlFor={key} className="pl-3">
            {value}
          </label>
        </div>
      ))}
    </div>
  )
}

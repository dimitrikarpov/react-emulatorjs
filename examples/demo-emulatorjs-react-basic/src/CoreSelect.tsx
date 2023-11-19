import { CoreSelectOption } from "./CoreSelect.types"
import { platforms } from "./CoreSelect.constants"

type Props = {
  value: CoreSelectOption
  onChange: (value: CoreSelectOption) => void
}

export const CoreSelect: React.FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <p className="text-lg">Select Platform</p>
      <div className="flex flex-wrap gap-3">
        {Object.entries(platforms).map(([name, options]) => (
          <fieldset
            key={name}
            className="border border-black rounded-sm p-2 w-fit"
          >
            <legend>{name}</legend>
            <div className="flex gap-2">
              {options.map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    onClick={() => onChange(option)}
                    checked={value === option}
                    defaultChecked={false}
                  />
                  <label htmlFor={option} className="pl-3">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </>
  )
}

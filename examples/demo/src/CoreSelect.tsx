import { EJS_core, platforms } from "react-emulatorjs"

type Props = {
  value: EJS_core
  onChange: (value: EJS_core) => void
}

export const CoreSelect: React.FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map(({ name, cores }) => (
        <fieldset
          key={name}
          className="border border-black rounded-sm p-2 w-fit"
        >
          <legend>{name}</legend>
          <div className="flex gap-2">
            {cores.map((core) => (
              <div key={core}>
                <input
                  type="radio"
                  id={core}
                  value={core}
                  onChange={() => onChange(core)}
                  checked={value === core}
                />
                <label htmlFor={core} className="pl-3">
                  {core}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  )
}

import { CoreSelectOption } from "./CoreSelect.types"
import { Bios, findCoreBioses } from "./bioses"

type Props = {
  core: CoreSelectOption
  value: string // biosUrl
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export const BiosSelect: React.FunctionComponent<Props> = ({
  core,
  value,
  onChange,
}) => {
  const bioses = findCoreBioses(core)

  if (bioses.length === 0) return null

  return (
    <>
      <p className="text-lg">Select Bios</p>
      <div className="flex flex-wrap gap-3"></div>
      <fieldset className="border border-black rounded-sm p-2 w-fit">
        <legend>{core} bioses</legend>
        {bioses.map((bios) => (
          <>
            <div className="flex gap-2">
              <div key={bios.name}>
                <input
                  type="radio"
                  id={bios.name}
                  value={bios.url}
                  onClick={() => onChange(bios.url)}
                  //   checked={value === option}
                  checked={isChecked(bios, value)}
                  defaultChecked={false}
                />
                <label htmlFor={bios.name} className="pl-3">
                  {bios.name}
                </label>
              </div>
            </div>
          </>
        ))}
      </fieldset>
    </>
  )
}

const isChecked = (bios: Bios, selectedBiosUrl: string) => {
  return bios.url === selectedBiosUrl
}

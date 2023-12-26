import { findCoreBioses } from "react-emulatorjs"

type Props = {
  items: ReturnType<typeof findCoreBioses>
  value: string | undefined
  onChange: (value: string | undefined) => void
}

export const BiosSelect: React.FunctionComponent<Props> = ({
  items,
  value,
  onChange,
}) => {
  if (!items) return null

  return (
    <div className="flex flex-col flex-wrap gap-3">
      <div>
        <input
          type="radio"
          id="without-bios"
          value={undefined}
          onChange={() => onChange(undefined)}
          checked={value === undefined}
        />
        <label htmlFor="without-bios" className="pl-3">
          without bios
        </label>
      </div>
      {items.map((bios) =>
        bios.url ? (
          <div key={bios.name}>
            <input
              type="radio"
              id={bios.name}
              value={bios.name}
              onChange={() => onChange(bios.url)}
              checked={value === bios.url}
            />
            <label htmlFor={bios.name} className="pl-3">
              {bios.name}
              <span className="text-gray-600 hover:text-gray-900 ml-5">
                {bios.description}
              </span>
            </label>
          </div>
        ) : null,
      )}
    </div>
  )
}

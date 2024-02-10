import { ChangeEvent, useEffect, useRef } from "react"
import { Input } from "../../../@/components/ui/input"
import { useEmuPropsContext } from "../../useEmuPropsContext"
import { romsCollection } from "../../romsCollection"

export const RomSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    formState: { rom: file },
    dispatch,
  } = useEmuPropsContext()

  const setFile = (file: string | undefined) => {
    dispatch({ type: "setRom", payload: file })
  }

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setFile(URL.createObjectURL(file))
  }

  const onClick: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.value = ""
    setFile(undefined)
  }

  const onCollectionItemClick = (url: string) => {
    setFile(url)
  }

  useEffect(() => {
    if (!file && inputRef.current) {
      inputRef.current.value = ""
    }
  }, [file])

  console.log({ file })

  return (
    <div>
      <div className="flex flex-col">
        {romsCollection.map((item) => (
          <div key={item.name}>
            <input
              type="radio"
              id={item.name}
              value={item.name}
              checked={file === item.url}
              onChange={() => onCollectionItemClick(item.url)}
            />
            <label htmlFor={item.name} className="pl-3">
              {item.name}
              <span className="text-gray-600 hover:text-gray-900 ml-5">
                {item.core}
              </span>
              <a href={item.site} className="ml-4">
                home page
              </a>
            </label>
          </div>
        ))}

        <div className="flex flex-row items-baseline">
          <input type="radio" checked={file?.startsWith("blob:")} />
          <span className="ml-3">choose local file</span>
          <Input
            type="file"
            ref={inputRef}
            onChange={onFileSelect}
            onClick={onClick}
            className="w-48 ml-3"
          />
        </div>
      </div>
    </div>
  )
}

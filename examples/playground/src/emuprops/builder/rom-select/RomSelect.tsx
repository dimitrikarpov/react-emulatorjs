import { ChangeEvent, useEffect, useRef } from "react"
import { Input } from "../../../@/components/ui/input"
import { useEmuPropsContext } from "../../useEmuPropsContext"
import { getCollectionItemByUrl, romsCollection } from "../../romsCollection"
import { Badge } from "../../../@/components/ui/badge"

export const RomSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    formState: { rom: file },
    dispatch,
    onPlatformChange,
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
    const item = getCollectionItemByUrl(url)

    setFile(url)
    onPlatformChange(item.core)
  }

  useEffect(() => {
    if (!file && inputRef.current) {
      inputRef.current.value = ""
    }
  }, [file])

  const isLocalFileSelected = file?.startsWith("blob:")

  const picture =
    !file || isLocalFileSelected
      ? undefined
      : getCollectionItemByUrl(file!).picture

  return (
    <div className="flex flex-row gap-3">
      <div className="flex flex-col gap-1 w-1/2">
        {romsCollection.map((item) => (
          <div key={item.name} className="flex justify-between">
            <div>
              <input
                type="radio"
                id={item.name}
                value={item.name}
                onChange={() => onCollectionItemClick(item.url)}
                checked={file === item.url}
              />
              <label htmlFor={item.name} className="pl-3 ml-1 mr-1">
                {item.name}
              </label>
            </div>
            <div>
              <Badge variant="outline">{item.platform}</Badge>
              <a href={item.site} className="ml-4">
                itch.io
              </a>
            </div>
          </div>
        ))}

        <div className="flex flex-row items-baseline">
          <input type="radio" checked={isLocalFileSelected} readOnly />
          <span className="ml-3">local file</span>
          <Input
            type="file"
            ref={inputRef}
            onChange={onFileSelect}
            onClick={onClick}
            className="w-48 ml-3"
          />
        </div>
      </div>

      <div className="w-1/2">
        <img src={picture} alt="" />
      </div>
    </div>
  )
}

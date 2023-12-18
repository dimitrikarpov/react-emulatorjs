import { ChangeEvent, useEffect, useRef } from "react"

type Props = {
  rom: string | undefined
  setRom: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const RomSelect: React.FunctionComponent<Props> = ({ rom, setRom }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onRomUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  const onClick: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.value = ""
    setRom(undefined)
  }

  useEffect(() => {
    if (!rom && inputRef.current) {
      inputRef.current.value = ""
    }
  }, [rom])

  return (
    <>
      <p>Select ROM</p>
      <input
        ref={inputRef}
        type="file"
        onChange={onRomUpload}
        onClick={onClick}
      />
    </>
  )
}

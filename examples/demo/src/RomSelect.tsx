import { ChangeEvent, useEffect, useRef } from "react"
import { Input } from "./@/components/ui/input"
import { useEmuPropsContext } from "./useEmuPropsContext"

export const RomSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { rom, setRom } = useEmuPropsContext()

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
      <p>ROM</p>
      <Input
        type="file"
        ref={inputRef}
        onChange={onRomUpload}
        onClick={onClick}
      />
    </>
  )
}

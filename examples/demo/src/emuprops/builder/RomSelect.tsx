import { ChangeEvent, useEffect, useRef } from "react"
import { Input } from "../../@/components/ui/input"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const RomSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { rom: file, setRom: setFile } = useEmuPropsContext()

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setFile(URL.createObjectURL(file))
  }

  const onClick: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.value = ""
    setFile(undefined)
  }

  useEffect(() => {
    if (!file && inputRef.current) {
      inputRef.current.value = ""
    }
  }, [file])

  return (
    <>
      <p>ROM</p>
      <Input
        type="file"
        ref={inputRef}
        onChange={onFileSelect}
        onClick={onClick}
      />
    </>
  )
}
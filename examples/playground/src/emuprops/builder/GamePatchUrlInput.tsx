import { ChangeEvent, useEffect, useRef } from "react"
import { useEmuPropsContext } from "../useEmuPropsContext"
import { Input } from "../../@/components/ui/input"

export const GamPatchUrlInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    formState: { gamePatchUrl: file },
    dispatch,
  } = useEmuPropsContext()

  const setFile = (file: string | undefined) => {
    dispatch({ type: "setGamePatchUrl", payload: file })
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

  useEffect(() => {
    if (!file && inputRef.current) {
      inputRef.current.value = ""
    }
  }, [file])

  return (
    <div className="flex gap-5 items-center">
      <p>PATCH</p>
      <Input
        type="file"
        ref={inputRef}
        onChange={onFileSelect}
        onClick={onClick}
      />
    </div>
  )
}

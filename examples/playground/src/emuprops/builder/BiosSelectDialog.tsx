import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog"
import { Button } from "../../@/components/ui/button"
import { BiosSelect } from "./BiosSelect"
import { useEmuPropsContext } from "../useEmuPropsContext"
import { findCoreBioses } from "react-emulatorjs"

export const BiosSelectDialog = () => {
  const {
    formState: { platform, biosUrl },
    dispatch,
  } = useEmuPropsContext()
  const [open, setOpen] = useState(false)

  const bioses = findCoreBioses(platform)?.filter(({ url }) => Boolean(url))

  const onSelect = (value: string | undefined) => {
    dispatch({ type: "setBiosUrl", payload: value })
    setOpen(false)
  }

  return (
    <div className="flex gap-5 items-center">
      <p>BIOS</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" disabled={!bioses}>
            Select Bios
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Select Core</DialogTitle>
            <DialogDescription>
              Select specific platform's Core
            </DialogDescription>
          </DialogHeader>
          <BiosSelect items={bioses} value={biosUrl} onChange={onSelect} />
        </DialogContent>
      </Dialog>

      {biosUrl ? biosUrl.split("/").at(-1) : "without bios"}
    </div>
  )
}

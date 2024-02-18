import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog"
import { Button } from "../../../@/components/ui/button"
import { RomSelect } from "./RomSelect"
import { useEmuPropsContext } from "../../useEmuPropsContext"
import { getCollectionItemByUrl } from "../../romsCollection"

export const RomSelectDialog = () => {
  const [open, setOpen] = useState(false)

  const {
    formState: { rom },
  } = useEmuPropsContext()

  const title = rom?.startsWith("roms/")
    ? getCollectionItemByUrl(rom).name
    : undefined

  return (
    <div className="flex gap-5 items-center">
      <p>ROM</p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Select ROM</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>ROM</DialogTitle>
            <DialogDescription>
              Select ROM from list or choose from local disk
            </DialogDescription>
          </DialogHeader>
          <RomSelect />
        </DialogContent>
      </Dialog>

      <span>{title}</span>
    </div>
  )
}

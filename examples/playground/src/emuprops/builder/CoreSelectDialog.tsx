import { EJS_core } from "react-emulatorjs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog"
import { Button } from "../../@/components/ui/button"
import { CoreSelect } from "./CoreSelect"
import { useState } from "react"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const CoreSelectDialog = () => {
  const {
    formState: { platform },
    onPlatformChange,
  } = useEmuPropsContext()
  const [open, setOpen] = useState(false)

  const onChange = (value: EJS_core) => {
    onPlatformChange(value)
    setOpen(false)
  }

  return (
    <div className="flex gap-5 items-center">
      <p>CORE</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Select Core</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Select Core</DialogTitle>
            <DialogDescription>
              Select specific platform's Core
            </DialogDescription>
          </DialogHeader>
          <CoreSelect value={platform} onChange={onChange} />
        </DialogContent>
      </Dialog>

      {platform}
    </div>
  )
}

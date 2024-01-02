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
import { ButtonsSelect } from "./ButtonsSelect"

export const ButtonsDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex gap-5 items-center">
      <p>UI</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Select buttons</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Emulator UI</DialogTitle>
            <DialogDescription>
              Select available emulator's buttons
            </DialogDescription>
          </DialogHeader>
          <ButtonsSelect />
        </DialogContent>
      </Dialog>
    </div>
  )
}

import { Emulator } from "react-emulatorjs"
import { Button } from "./@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./@/components/ui/dialog"
import { useEmuPropsContext } from "./useEmuPropsContext"

export const EmulatorDialog = () => {
  const {
    rom,
    platform,
    isEmulatorDialogOpen,
    emuProps,
    onEmulatorDialogToggle,
  } = useEmuPropsContext()

  return (
    <Dialog onOpenChange={onEmulatorDialogToggle}>
      <DialogTrigger asChild>
        <Button variant="default" disabled={!rom || !platform}>
          Start Emulator
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        {isEmulatorDialogOpen && <Emulator {...emuProps} />}
      </DialogContent>
    </Dialog>
  )
}

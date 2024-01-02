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
import { PathToDataInput } from "./PathToDataInput"
import { useEmuPropsContext } from "../useEmuPropsContext"

export const PathToDataDialog = () => {
  const [open, setOpen] = useState(false)
  const { pathToData, setPathToData } = useEmuPropsContext()

  const onSelect = (value: string) => {
    setPathToData(value)
    setOpen(false)
  }

  return (
    <>
      <p>DATA</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Select path to data</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Path to Data</DialogTitle>
            <DialogDescription>
              Select path to emulator's data
            </DialogDescription>
          </DialogHeader>
          <PathToDataInput onSelect={onSelect} />
        </DialogContent>
      </Dialog>

      <p className="w-52 text-ellipsis overflow-hidden" title={pathToData}>
        {pathToData}
      </p>
    </>
  )
}

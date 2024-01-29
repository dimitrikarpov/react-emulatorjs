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
import { useEmuPropsContext } from "../useEmuPropsContext"
import { LanguageInput } from "./LanguageInput"
import { Language } from "react-emulatorjs"

const defaultLanguage: Language = "en-US"

export const LanguageDialog = () => {
  const [open, setOpen] = useState(false)
  const {
    formState: { language },
    dispatch,
  } = useEmuPropsContext()

  const onSelect = (value: string) => {
    dispatch({ type: "setLanguage", payload: value as Language })
    setOpen(false)
  }

  return (
    <div className="flex gap-5 items-center">
      <p>LANGUAGE</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Select language</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Language</DialogTitle>
            <DialogDescription>Select language</DialogDescription>
          </DialogHeader>
          <LanguageInput onSelect={onSelect} />
        </DialogContent>
      </Dialog>

      <p
        className="w-52 text-ellipsis overflow-hidden"
        title={language || defaultLanguage}
      >
        {language || defaultLanguage}
      </p>
    </div>
  )
}

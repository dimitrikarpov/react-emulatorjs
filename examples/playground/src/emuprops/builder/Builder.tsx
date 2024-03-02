import { BiosSelectDialog } from "./BiosSelectDialog"
import { ButtonsDialog } from "./ButtonsDialog"
import { CoreSelectDialog } from "./CoreSelectDialog"
import { DebugSwitch } from "./DebugSwitch"
import { FullScreenSwitch } from "./FullScreenSwitch"
import { GamPatchUrlInput } from "./GamePatchUrlInput"
import { LoadStateInput } from "./LoadStateInput"
import { StartOnLoadedSwitch } from "./StartOnLoadedSwitch"
import { PathToDataDialog } from "./PathToDataDialog"
import { LanguageDialog } from "./LanguageDialog"
import { RomSelectDialog } from "./rom-select/RomSelectDialog"
import { SizeSelect } from "./SizeSelect"

export const Builder = () => {
  return (
    <div className="flex flex-col text-left gap-5 min-w-fit shadow-lg rounded p-3">
      <RomSelectDialog />
      <CoreSelectDialog />
      <BiosSelectDialog />
      <LoadStateInput />
      <GamPatchUrlInput />
      <DebugSwitch />
      <FullScreenSwitch />
      <StartOnLoadedSwitch />
      <ButtonsDialog />
      <PathToDataDialog />
      <LanguageDialog />
      <SizeSelect />
    </div>
  )
}

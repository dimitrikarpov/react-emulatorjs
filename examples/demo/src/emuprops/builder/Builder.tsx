import { BiosSelectDialog } from "./BiosSelectDialog"
import { ButtonsDialog } from "./ButtonsDialog"
import { CoreSelectDialog } from "./CoreSelectDialog"
import { DebugSwitch } from "./DebugSwitch"
import { FullScreenSwitch } from "./FullScreenSwitch"
import { GamPatchUrlInput } from "./GamePatchUrlInput"
import { LoadStateInput } from "./LoadStateInput"
import { RomSelect } from "./RomSelect"
import { StartOnLoadedSwitch } from "./StartOnLoadedSwitch"
import { PathToDataDialog } from "./PathToDataDialog"

export const Builder = () => {
  return (
    <div className="flex flex-col text-left gap-5 min-w-fit shadow-lg rounded p-3">
      <RomSelect />
      <CoreSelectDialog />
      <BiosSelectDialog />
      <LoadStateInput />
      <GamPatchUrlInput />
      <DebugSwitch />
      <FullScreenSwitch />
      <StartOnLoadedSwitch />
      <ButtonsDialog />
      <PathToDataDialog />
    </div>
  )
}

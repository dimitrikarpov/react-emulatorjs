import { EmulatorDialog } from "../emulator/EmulatorDialog"
import { BiosSelectDialog } from "./BiosSelectDialog"
import { ButtonsDialog } from "./ButtonsDialog"
import { CoreSelectDialog } from "./CoreSelectDialog"
import { DebugSwitch } from "./DebugSwitch"
import { FullScreenSwitch } from "./FullScreenSwitch"
import { GamPatchUrlInput } from "./GamePatchUrlInput"
import { LoadStateInput } from "./LoadStateInput"
import { RomSelect } from "./RomSelect"
import { StartOnLoadedSwitch } from "./StartOnLoadedSwitch"

export const Builder = () => {
  return (
    <div className="flex flex-col text-left gap-5 min-w-fit">
      <div className="flex gap-5 items-center">
        <RomSelect />
      </div>

      <div className="flex gap-5 items-center">
        <CoreSelectDialog />
      </div>

      <div className="flex gap-5 items-center">
        <BiosSelectDialog />
      </div>

      <div className="flex gap-5 items-center">
        <LoadStateInput />
      </div>

      <div className="flex gap-5 items-center">
        <GamPatchUrlInput />
      </div>

      <div className="flex gap-5 items-center">
        <DebugSwitch />
      </div>

      <div className="flex gap-5 items-center">
        <FullScreenSwitch />
      </div>

      <div className="flex gap-5 items-center">
        <StartOnLoadedSwitch />
      </div>

      <div className="flex gap-5 items-center">
        <ButtonsDialog />
      </div>

      <div>
        <EmulatorDialog />
      </div>
    </div>
  )
}

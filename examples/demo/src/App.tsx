import "./App.css"
import { RomSelect } from "./RomSelect"
import { RightPanel } from "./RightPanel"
import { CoreSelectDialog } from "./CoreSelectDialog"
import { BiosSelectDialog } from "./BiosSelectDialog"
import { EmulatorDialog } from "./EmulatorDialog"
import { LoadStateInput } from "./emuprops-builder/ejs-loadstateurl/LoadStateInput"
import { GamPatchUrlInput } from "./emuprops-builder/ejs-gamepatchurl/GamePatchUrlInput"
import { DebugSwitch } from "./emuprops-builder/ejs-debug/DebugSwitch"
import { FullScreenSwitch } from "./emuprops-builder/ejs-fullscreenonload/FullScreenSwitch"
import { StartOnLoadedSwitch } from "./emuprops-builder/ejs-startonloaded/StartOnLoadedSwitch"
import { ButtonsDialog } from "./emuprops-builder/ejs-buttons/ButtonsDialog"

const App = () => {
  return (
    <div className="flex flex-row">
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

      <div className="bg-[#ebeef500] w-full">
        <RightPanel />
      </div>
    </div>
  )
}

export default App

/*

[X] EJS_loadStateURL
[?] EJS_gamePatchUrl
[X] EJS_DEBUG_XX
[?] EJS_fullscreenOnLoad
[X] EJS_startOnLoaded
----
EJS_volume
EJS_Buttons
----
add string to set path and bioses urls
also save thts settings in localStorage
*/

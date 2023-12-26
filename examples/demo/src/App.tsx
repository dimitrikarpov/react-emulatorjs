import "./App.css"
import { RomSelect } from "./RomSelect"
import { RightPanel } from "./RightPanel"
import { CoreSelectDialog } from "./CoreSelectDialog"
import { BiosSelectDialog } from "./BiosSelectDialog"
import { EmulatorDialog } from "./EmulatorDialog"

const App = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col text-left gap-5">
        <div className="flex gap-5 items-center">
          <RomSelect />
        </div>

        <div className="flex gap-5 items-center">
          <CoreSelectDialog />
        </div>

        <div className="flex gap-5 items-center">
          <BiosSelectDialog />
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

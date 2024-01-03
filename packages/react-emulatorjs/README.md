# react-emulatorjs

Thing to integrate powerfull [emulatorjs](https://emulatorjs.org/) in to Your React project

### what is emulatorjs

Emulatorjs is a js library to configure and run retro games in web version of [retroarch](https://www.retroarch.com/) with great UI and features like save states, capturing screenshots, configuring controls, etc... Emulatorjs team did the great job to compile retroarch cores. Check out cores [list](https://emulatorjs.org/docs/Systems.html).

### what is react-emulatorjs

`react-emulatorjs` is a easiest way to use emulatorjs in React with full typescript support including all emulatorjs options.

## quick start

Install react-emulatorjs

```
npm install react-emulatorjs
```

Next we have to provide link to ROM. It can be somethere in the internet. Or we can use local file. Let's create a file handler first.

```typescript
import "./App.css"
import { ChangeEvent, useState } from "react"
import { EmulatorJS, defaultPathToData } from "react-emulatorjs"

function App() {
  const [rom, setRom] = useState<string>()

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  return (
    <>
      <div>
        <input type="file" onChange={onFileSelect} />
      </div>
    </>
  )
}

```

Next we have to select `core` and start the emulator

```typescript
import "./App.css"
import { ChangeEvent, useState } from "react"
import { EmulatorJS, defaultPathToData } from "react-emulatorjs"

function App() {
  const [rom, setRom] = useState<string>()

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  return (
    <>
      <div>
        <input type="file" onChange={onFileSelect} />
      </div>

      {rom && (
        <EmulatorJS
          EJS_core="nes" // selected core
          EJS_gameUrl={rom} // rom file
          EJS_pathtodata={defaultPathToData} // path to data
        />
      )}
    </>
  )
}

```

And thats all! Now You can run `nes` roms in browser.

Checkout codesandbox [demo](https://codesandbox.io/p/sandbox/react-emulatorjs-3rm8c3) with this code.

### using locally installed cores

The most important option is `EJS_pathtodata`. This path points to emulatorjs's binaries. And the best performance option is keep whem close as possible, on Your sever. And it is very easy.

- Just download `data` folder from [emulatorjs repository](https://github.com/EmulatorJS/EmulatorJS/tree/main/data) and copy in to Your `public` folder. For example, if You are using 'vite' data folder should be in `/public/data` folder.
- Update prop with new path
  ```typescript
  <EmulatorJS
      //...
      EJS_pathtodata="/data"
  />
  ```

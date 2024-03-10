# react-emulatorjs 🕹️

<div align = center>
A thing for playing retro games
</div>
<br/>
<div align = center>

[![Button Playground]][Playground]
[![Button NPM]][NPM]
[![Button Gihub]][Github]
[![Button API]][API]

</div>

### what is emulatorjs

Emulatorjs is a js library to configure and run retro games in web version of [retroarch](https://www.retroarch.com/) with great UI and features like save states, capturing screenshots, configuring controls, etc... Emulatorjs team did the great job to compile retroarch cores. Check out cores [list](https://emulatorjs.org/docs/Systems.html).

### what is react-emulatorjs

`react-emulatorjs` is a easiest way to use emulatorjs in React with full typescript support including all emulatorjs options. Available [cores](https://emulatorjs.org/docs/Options.html), available [options](https://emulatorjs.org/docs/Options.html).

## ⚡ quick start

Install react-emulatorjs

```
npm install react-emulatorjs
```

Next we have to provide url to ROM. It can be somewhere in the internet. Or we can upload a local file. Let's create a file handler to make url to our local blob.

Next we have to select `core` and start the emulator when the `rom` is ready.

```typescript
import { ChangeEvent, useState } from "react"
import { EmulatorJS } from "react-emulatorjs"

function App() {
  const [rom, setRom] = useState<string>()

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files?.[0]
    setRom(URL.createObjectURL(file))
  }

  return (
    <>
      <input type="file" onChange={onFileSelect} />

      {rom && (
        <EmulatorJS
          EJS_core="nes" // emulator core
          EJS_gameUrl={rom} // rom url
        />
      )}
    </>
  )
}
```

And thats all! Now You can run `nes` roms in browser.

Checkout codesandbox [demo](https://codesandbox.io/p/sandbox/react-emulatorjs-3rm8c3) with this code.

### 📎 using locally installed cores

The most important option is `EJS_pathtodata`. This path points to emulatorjs's binaries. And the best performance option is keep them close as possible, on Your sever. And it is very easy.

- Just extract `data` folder from latest emulatorjs [release](https://github.com/EmulatorJS/EmulatorJS/releases) and copy in to project's `public` folder. For example, if You are using 'vite' data folder should be in `/public/data`.
- Update prop with new path
  ```typescript
  <EmulatorJS
      //...
      EJS_pathtodata="/data"
  />
  ```

## Docs and examples

- [npm](https://www.npmjs.com/package/react-emulatorjs)
- [online playground](https://dimitrikarpov.github.io/react-emulatorjs/)
- [online playground: source code](https://github.com/dimitrikarpov/react-emulatorjs/tree/main/examples/playground)
- [quick start demo sandbox](https://codesandbox.io/p/sandbox/react-emulatorjs-3rm8c3)
- [react-emulatorjs: API](https://tsdocs.dev/docs/react-emulatorjs/2.1.0/types/Settings.html)
- [EmulatorJS: available options](https://emulatorjs.org/docs/Options.html)
- [EmulatorJS: available cores](https://emulatorjs.org/docs/Systems.html)

<!-- Quick links --->

[Playground]: https://dimitrikarpov.github.io/react-emulatorjs
[NPM]: https://www.npmjs.com/package/react-emulatorjs
[Github]: https://github.com/dimitrikarpov/react-emulatorjs
[API]: https://tsdocs.dev/docs/react-emulatorjs/2.1.0/types/Settings.html

<!-- Badges --->

[Button Playground]: https://img.shields.io/badge/demo-playground?style=for-the-badge&logo=githubpages&labelColor=%23C21292&color=%239195F6
[Button NPM]: https://img.shields.io/badge/npm-reactemulatorjs?style=for-the-badge&logo=npm&color=%239195F6&labelColor=FF6969
[Button Gihub]: https://img.shields.io/badge/github-777?style=for-the-badge&logo=github&labelColor=%2300A9FF&color=%23D0A2F7
[Button API]: https://img.shields.io/badge/api-api?style=for-the-badge&logo=docsdotrs&labelColor=blue&color=%239195F6

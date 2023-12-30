import { useCallback, useEffect, useRef } from "react"
import { buildEmulator } from "./buildEmulator"
import { Settings } from "./types"

type Props = Settings

export const Emulator: React.FunctionComponent<Props> = (props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  console.log({ props })

  const setIframeGlobals = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const iframeGlobal = iframeRef.current.contentWindow.globalThis

    // @ts-ignore
    iframeGlobal.EJS_player = "#game"

    for (const key in props) {
      // @ts-ignore
      iframeGlobal[key] = props[key as keyof Settings]
    }
  }, [props])

  useEffect(() => {
    if (!iframeRef.current) return

    const oldDoc = iframeRef.current.contentDocument

    const timer = setInterval(() => {
      if (!iframeRef.current) return

      const newDoc = iframeRef.current.contentDocument
      if (newDoc == oldDoc) return

      setIframeGlobals()
      clearInterval(timer)
    }, 100)
  }, [setIframeGlobals])

  const html = buildEmulator({
    loader: `${props.EJS_pathtodata}/loader.js`,
  }).innerHTML

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      height={480}
      width={640}
      style={{ border: 0 }}
    ></iframe>
  )
}

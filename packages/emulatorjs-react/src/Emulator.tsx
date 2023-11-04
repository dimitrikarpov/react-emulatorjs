import { useCallback, useEffect, useRef } from "react"
import { buildEmulator } from "./buildEmulator"
import { Settings } from "./types"

type Props = Settings

export const Emulator: React.FunctionComponent<Props> = (props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const setIframeGlobals = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const iframeGlobal = iframeRef.current.contentWindow.globalThis

    iframeGlobal.EJS_player = "#game"
    for (const key in props) {
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

  const html = buildEmulator().innerHTML

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

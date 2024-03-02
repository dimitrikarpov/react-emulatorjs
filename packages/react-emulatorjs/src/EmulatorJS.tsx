import { useCallback, useEffect, useRef } from "react"
import { buildEmulator } from "./buildEmulator"
import { Settings } from "./types"
import { defaultPathToData } from "./defaultPathToData"

type Props = { width?: number; height?: number } & Settings

export const EmulatorJS: React.FunctionComponent<Props> = (props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const setIframeGlobals = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const iframeGlobal = iframeRef.current.contentWindow.globalThis

    // @ts-ignore
    iframeGlobal.EJS_player = "#game"

    if (!props.EJS_pathtodata) iframeGlobal.EJS_pathtodata = defaultPathToData
    if (!props.EJS_gameName) iframeGlobal.EJS_gameName = "gameNamePlaceholder"

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
    loader: `${props.EJS_pathtodata || defaultPathToData}/loader.js`,
  }).innerHTML

  const width = props.width || 640
  const height = props.height || 480

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      style={{ border: 0, width: `${width}px`, height: `${height}px` }}
    ></iframe>
  )
}

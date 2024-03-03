import { defaultSize } from "./defaultSize"

type Params = {
  loader: string
  width?: number
  height?: number
}

export const buildEmulator = ({
  loader,
  width = defaultSize.width,
  height = defaultSize.height,
}: Params) => {
  const html = document.createElement("html")
  html.innerHTML = `
<html>
  <head>
    <style>body, html { margin: 0; padding: 0; }</style>
  </head>
  <body>
    <div style="width: ${width}px; height: ${height}px; max-width: 100%">   
      <div id="game"></div>
    </div>
    <script>
      setTimeout(() => {
        let script = document.createElement("script");
        script.src = "${loader}";
        document.body.append(script);        
      }, 200)
    </script>
  </body>
</html>
`

  return html
}

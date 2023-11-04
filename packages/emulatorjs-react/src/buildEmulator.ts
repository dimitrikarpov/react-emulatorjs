type Params = {
  height?: number
  width?: number
  loader?: string
}

export const buildEmulator = ({
  width = 640,
  height = 480,
  loader = "https://demo.emulatorjs.org/data/loader.js",
}: Params = {}) => {
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
    <script src="${loader}"></script>
  </body>
</html>
`
  return html
}

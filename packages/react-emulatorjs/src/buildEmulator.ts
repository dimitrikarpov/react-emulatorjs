type Params = {
  loader: string
}

export const buildEmulator = ({ loader }: Params) => {
  const html = document.createElement("html")
  html.innerHTML = `
<html>
  <head>
    <style>body, html { margin: 0; padding: 0; }</style>
  </head>
  <body>
    <div style="width:100%;height:100%;max-width:100%">    
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

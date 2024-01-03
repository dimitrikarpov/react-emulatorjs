"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEmulator = void 0;
const buildEmulator = ({ width = 640, height = 480, loader, }) => {
    const html = document.createElement("html");
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
`;
    return html;
};
exports.buildEmulator = buildEmulator;

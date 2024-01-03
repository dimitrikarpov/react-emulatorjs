"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmulatorJS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const buildEmulator_1 = require("./buildEmulator");
const defaultPathToData_1 = require("./defaultPathToData");
const EmulatorJS = (props) => {
    const iframeRef = (0, react_1.useRef)(null);
    const setIframeGlobals = (0, react_1.useCallback)(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const iframeGlobal = iframeRef.current.contentWindow.globalThis;
        // @ts-ignore
        iframeGlobal.EJS_player = "#game";
        if (!props.EJS_pathtodata)
            iframeGlobal.EJS_pathtodata = defaultPathToData_1.defaultPathToData;
        for (const key in props) {
            // @ts-ignore
            iframeGlobal[key] = props[key];
        }
    }, [props]);
    (0, react_1.useEffect)(() => {
        if (!iframeRef.current)
            return;
        const oldDoc = iframeRef.current.contentDocument;
        const timer = setInterval(() => {
            if (!iframeRef.current)
                return;
            const newDoc = iframeRef.current.contentDocument;
            if (newDoc == oldDoc)
                return;
            setIframeGlobals();
            clearInterval(timer);
        }, 100);
    }, [setIframeGlobals]);
    const html = (0, buildEmulator_1.buildEmulator)({
        loader: `${props.EJS_pathtodata || defaultPathToData_1.defaultPathToData}/loader.js`,
    }).innerHTML;
    return ((0, jsx_runtime_1.jsx)("iframe", { ref: iframeRef, srcDoc: html, height: 480, width: 640, style: { border: 0 } }));
};
exports.EmulatorJS = EmulatorJS;

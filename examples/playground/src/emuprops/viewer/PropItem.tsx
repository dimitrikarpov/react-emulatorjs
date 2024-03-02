import { PropItemBoolean } from "./PropItemBoolean"
import { PropItemString } from "./PropItemString"
import { PropItemGameUrl } from "./PropItemGameUrl"
import { PropItemName, PropItemProps } from "./types"
import { PropItemButtons } from "./PropItemButtons"

const PropToComponent: Record<
  PropItemName,
  React.FunctionComponent<PropItemProps>
> = {
  EJS_core: PropItemString,
  EJS_gameUrl: PropItemGameUrl,
  EJS_pathtodata: PropItemString,
  EJS_language: PropItemString,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  EJS_biosUrl: PropItemString,
  EJS_loadStateURL: PropItemString,
  EJS_gamePatchUrl: PropItemString,
  //
  EJS_DEBUG_XX: PropItemBoolean,
  EJS_fullscreenOnLoad: PropItemBoolean,
  EJS_startOnLoaded: PropItemBoolean,
  EJS_Buttons: PropItemButtons,
  //
  width: PropItemString,
  height: PropItemString,
}

export const PropItem: React.FunctionComponent<PropItemProps> = (props) => {
  const Component = PropToComponent[props.name]
  return <Component {...props} />
}

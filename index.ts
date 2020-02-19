export function fixedWidthEllipsis(str: string, maxWidth: number, font = "14px sans-serif"): [string, boolean, number] {
  const canvasEle = document.createElement("canvas");
  const ctx = canvasEle.getContext("2d");
  let width = ctx.measureText(str).width;
  const ellipsis = "...";
  const ellipsisWidth = ctx.measureText(ellipsis).width;
  if (width <= maxWidth || width <= ellipsisWidth) {
    return [str, false, width];
  } else {
    let len = str.length;
    while (width >= maxWidth - ellipsisWidth && len-- > 0) {
      str = str.substring(0, len);
      width = ctx.measureText(str).width;
    }
    const res = str + ellipsis;
    return [res, true, ctx.measureText(res).width];
  }
}

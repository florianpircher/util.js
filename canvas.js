'use strict'

window.util = typeof util === 'undefined' ? {} : util

/**
 * Standard canvas layout procedure. Sets width and height of a canvas element
 * and increases its resolution to the pixel ratio of the device. Will adjust
 * size of canvas for 'resize' events on `window`.
 * 
 * - parameter canvas HTMLCanvasElement: Canvas element.
 * - parameter context CanvasRenderingContext2D: Context of `canvas`.
 * - parameter getWidth Function: Returns the desired width of the canvas.
 *             - parameter canvas HTMLCanvasElement: The original canvas.
 *             - returns Number: Desired width of the canvas element.
 * - parameter getHeight Function: Returns the desired height of the canvas.
 *             - parameter canvas HTMLCanvasElement: The original canvas.
 *             - returns Number: Desired height of the canvas element.
 * - returns Function: The generated layouting function. This function will be
 *                     called after the window is resized. It can be manually
 *                     invoked as to manually layout the canvas.
 * - known issues: Does not handle changes of `devicePixelRatio`.
 */
util.layoutCanvas = (canvas, ctx, getWidth, getHeight) => {
  ctx.scale(devicePixelRatio, devicePixelRatio)
  
  const layout = () => {
    const width  = getWidth(canvas)
    const height = getHeight(canvas)
  
    canvas.width  = width  * devicePixelRatio
    canvas.height = height * devicePixelRatio
    canvas.style.width  = `${width}px`
    canvas.style.height = `${height}px`
  }
  
  layout()
  window.addEventListener('resize', layout)
  
  return layout
}

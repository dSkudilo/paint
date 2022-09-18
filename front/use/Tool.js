export default class Tool {
  constructor (canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.destroyEvents()
  }

  // eslint-disable-next-line accessor-pairs
  set fillColor (color) {
    this.ctx.fillStyle = color
  }

  // eslint-disable-next-line accessor-pairs
  set strokeColor (color) {
    this.ctx.strokeStyle = color
  }

  // eslint-disable-next-line accessor-pairs
  set lineWidth (width) {
    console.log(width)
    this.ctx.lineWidth = width
  }

  destroyEvents () {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}

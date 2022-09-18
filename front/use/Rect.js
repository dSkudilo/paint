import Tool from './Tool'

export default class Rect extends Tool {
  constructor (canvas) {
    super(canvas)
    this.listen()
  }

  listen () {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseMoveHandler (e) {
    if (this.mouseDown) {
      const currentX = e.pageX - e.target.offsetLeft
      const currentY = e.pageY - e.target.offsetTop
      const width = currentX - this.startX
      const height = currentY - this.startY
      this.draw(this.startX, this.startY, width, height)
    }
  }

  mouseDownHandler (e) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.startX = e.pageX - e.target.offsetLeft
    this.startY = e.pageY - e.target.offsetTop
    this.saved = this.canvas.toDataURL()
  }

  mouseUpHandler (e) {
    this.mouseDown = false
  }

  draw (x, y, w, h) {
    const Img = new Image()
    Img.src = this.saved
    Img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(Img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.rect(x, y, w, h)
      this.ctx.fill()
      this.ctx.stroke()
    }
  }
}

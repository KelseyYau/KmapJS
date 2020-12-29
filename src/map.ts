import { Geometry } from "geometry/geometry"

export class Map {
  private _canvas: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D

  private _drag: any = {
    flag: false,
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 0,
      y: 0
    }
  }

  private _geometries: Geometry[] = []

  constructor(id: string) {
    this._canvas = document.getElementById(id) as HTMLCanvasElement
    this._ctx = this._canvas.getContext("2d")

    this._onDoubleClick = this._onDoubleClick.bind(this)
    this._onMouseDown = this._onMouseDown.bind(this)
    this._onMouseMove = this._onMouseMove.bind(this)
    this._onMouseUp = this._onMouseUp.bind(this)
    this._onWheel = this._onWheel.bind(this)

    this._canvas.addEventListener("dblclick", this._onDoubleClick)
    this._canvas.addEventListener("mousedown", this._onMouseDown)
    this._canvas.addEventListener("mousemove", this._onMouseMove)
    this._canvas.addEventListener("mouseup", this._onMouseUp)
    this._canvas.addEventListener("wheel", this._onWheel)
  }

  addGeometry(geometry: Geometry) {
    geometry.draw(this._ctx)
    this._geometries.push(geometry)
  }

  redraw() {
    this._ctx.save()
    this._ctx.setTransform(1,0,0,1,0,0)
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
    this._ctx.restore()
    this._geometries.forEach(geometry => geometry.draw(this._ctx))
  }

  clear() {
    this._ctx.setTransform(1, 0, 0, 1, 0, 0)
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  _onDoubleClick(event) {
    this._ctx.scale(2, 2)
    this.redraw()
  }

  _onMouseDown(event) {
    this._drag.flag = true
    this._drag.start.x = event.x
    this._drag.start.y = event.y
  }

  _onMouseMove(event) {

  }

  _onMouseUp(event) {
    if (this._drag.flag) {
      this._drag.end.x = event.x
      this._drag.end.y = event.y
      const matrix = this._ctx.getTransform()
      this._ctx.translate((this._drag.end.x - this._drag.start.x)/matrix.a, (this._drag.end.y - this._drag.start.y)/matrix.b)
      this.redraw()
    }
    this._drag.flag = false
  }

  _onWheel(event) {

  }
}
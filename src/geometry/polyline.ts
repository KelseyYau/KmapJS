import { Geometry } from "./geometry";

export class Polyline extends Geometry {
  // 坐标点集
  private _coordinates: number[][]

  constructor(coordinates: number[][]) {
    super()
    this._coordinates = coordinates
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.strokeStyle = "#ff0000"
    ctx.lineWidth = 2
    ctx.beginPath()
    this._coordinates.forEach((point, index) => {
      let x = point[0], y = point[1]
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()
    ctx.restore()
  }
}
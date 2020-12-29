import { Geometry } from "./geometry";

export class Polygon extends Geometry {
  private _coordinates: number[][][]

  constructor(coordinates: number[][][]) {
    this._coordinates = coordinates
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.strokeStyle = "#00ff00"
    ctx.fillStyle = "#ff0000"
    ctx.lineWidth = 2
    ctx.beginPath()
    this._coordinates.forEach( ring => {
      ring.forEach((point, index) => {
        let x = point[0], y = point[1]
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
    })
    ctx.closePath()
    ctx.fill("evenodd")
    ctx.stroke()
    ctx.restore()
  }
}
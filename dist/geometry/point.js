import { Geometry } from './geometry';
export class Point extends Geometry {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    draw(ctx) {
        ctx.save();
        ctx.strokeStyle = "#ff0000";
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        // 用点画圆
        ctx.arc(this._x, this._y, Point.RADIUS, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}
Point.RADIUS = 10;

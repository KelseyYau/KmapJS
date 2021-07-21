import { Geometry } from "geometry/geometry";
export declare class Map {
    private _canvas;
    private _ctx;
    private _drag;
    private _geometries;
    constructor(id: string);
    addGeometry(geometry: Geometry): void;
    redraw(): void;
    clear(): void;
    _onDoubleClick(event: any): void;
    _onMouseDown(event: any): void;
    _onMouseMove(event: any): void;
    _onMouseUp(event: any): void;
    _onWheel(event: any): void;
    destroy(): void;
}

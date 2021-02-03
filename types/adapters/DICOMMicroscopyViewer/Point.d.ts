export default Point;
declare class Point {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any[];
        lengths: number;
    };
}
declare namespace Point {
    export const graphicType: string;
    export const toolType: string;
    export const utilityToolType: string;
    export { TID300Point as TID300Representation };
}
import TID300Point from "../../utilities/TID300/Point.js";

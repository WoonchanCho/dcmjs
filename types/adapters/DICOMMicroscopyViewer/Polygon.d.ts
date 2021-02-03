export default Polygon;
declare class Polygon {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Polygon {
    export const graphicType: string;
    export const toolType: string;
    export const utilityToolType: string;
    export { TID300Polygon as TID300Representation };
}
import TID300Polygon from "../../utilities/TID300/Polygon.js";

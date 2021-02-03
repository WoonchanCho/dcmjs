export default Polyline;
declare class Polyline {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Polyline {
    export const graphicType: string;
    export const toolType: string;
    export const utilityToolType: string;
    export { TID300Polyline as TID300Representation };
}
import TID300Polyline from "../../utilities/TID300/Polyline.js";

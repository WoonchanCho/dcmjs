export default Circle;
declare class Circle {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Circle {
    export const graphicType: string;
    export const toolType: string;
    export const utilityToolType: string;
    export { TID300Circle as TID300Representation };
}
import TID300Circle from "../../utilities/TID300/Circle.js";

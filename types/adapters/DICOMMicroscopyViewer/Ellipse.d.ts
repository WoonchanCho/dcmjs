export default Ellipse;
declare class Ellipse {
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(scoord3d: any): {
        points: any;
        lengths: number;
    };
}
declare namespace Ellipse {
    export const graphicType: string;
    export const toolType: string;
    export const utilityToolType: string;
    export { TID300Ellipse as TID300Representation };
}
import TID300Ellipse from "../../utilities/TID300/Ellipse.js";

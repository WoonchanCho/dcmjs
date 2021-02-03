export default Freehand;
declare class Freehand {
    static measurementContentToLengthState(groupItemContent: any): {
        sopInstanceUid: any;
        frameIndex: any;
        toolType: string;
    };
    static getMeasurementData(measurementContent: any): any;
    static getTID300RepresentationArguments(): {};
}
declare namespace Freehand {
    export const toolType: string;
    export const utilityToolType: string;
    export { TID300Polyline as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
import TID300Polyline from "../../utilities/TID300/Polyline";

export default Length;
declare class Length {
    static getMeasurementData(MeasurementGroup: any): {
        sopInstanceUid: any;
        frameIndex: any;
        length: any;
        toolType: string;
        handles: {
            start: {};
            end: {};
            textBox: {
                hasMoved: boolean;
                movesIndependently: boolean;
                drawnIndependently: boolean;
                allowedOutsideImage: boolean;
                hasBoundingBox: boolean;
            };
        };
        finding: any;
        findingSites: any[];
    };
    static getTID300RepresentationArguments(tool: any): {
        point1: any;
        point2: any;
        distance: any;
        trackingIdentifierTextValue: string;
        finding: any;
        findingSites: any;
    };
}
declare namespace Length {
    export { LENGTH as toolType };
    export { LENGTH as utilityToolType };
    export { TID300Length as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const LENGTH: "Length";
import TID300Length from "../../utilities/TID300/Length.js";

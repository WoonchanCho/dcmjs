export default ArrowAnnotate;
declare class ArrowAnnotate {
    static getMeasurementData(MeasurementGroup: any): {
        sopInstanceUid: any;
        frameIndex: any;
        toolType: string;
        active: boolean;
        handles: {
            start: {
                x: any;
                y: any;
                highlight: boolean;
                active: boolean;
            };
            end: {
                x: any;
                y: any;
                highlight: boolean;
                active: boolean;
            };
            textBox: {
                hasMoved: boolean;
                movesIndependently: boolean;
                drawnIndependently: boolean;
                allowedOutsideImage: boolean;
                hasBoundingBox: boolean;
            };
        };
        invalidated: boolean;
        text: any;
        visible: boolean;
        finding: any;
        findingSites: any[];
    };
    static getTID300RepresentationArguments(tool: any): {
        points: any[];
        trackingIdentifierTextValue: string;
        findingSites: any;
    };
}
declare namespace ArrowAnnotate {
    export { ARROW_ANNOTATE as toolType };
    export { ARROW_ANNOTATE as utilityToolType };
    export { TID300Point as TID300Representation };
    export function isValidCornerstoneTrackingIdentifier(TrackingIdentifier: any): boolean;
}
declare const ARROW_ANNOTATE: "ArrowAnnotate";
import TID300Point from "../../utilities/TID300/Point.js";

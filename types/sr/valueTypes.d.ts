export class CodeContentItem extends ContentItem {
    constructor(options: any);
    ConceptCodeSequence: any[];
}
export class ContainerContentItem extends ContentItem {
    constructor(options: any);
    ContinuityOfContent: string;
    ContentTemplateSequence: {
        MappingResource: string;
        TemplateIdentifier: any;
    }[];
}
export class ContentSequence extends Array<any> {
    constructor(...args: any[]);
}
export class CompositeContentItem extends ContentItem {
    constructor(options: any);
    ReferenceSOPSequence: {
        ReferencedSOPClassUID: any;
        ReferencedSOPInstanceUID: any;
    }[];
}
export class DateContentItem extends ContentItem {
    constructor(options: any);
    Date: string;
}
export class DateTimeContentItem extends ContentItem {
    constructor(options: any);
    DateTime: string;
}
export namespace GraphicTypes {
    const CIRCLE: string;
    const ELLIPSE: string;
    const ELLIPSOID: string;
    const MULTIPOINT: string;
    const POINT: string;
    const POLYLINE: string;
}
export namespace GraphicTypes3D {
    const ELLIPSE_1: string;
    export { ELLIPSE_1 as ELLIPSE };
    const ELLIPSOID_1: string;
    export { ELLIPSOID_1 as ELLIPSOID };
    const MULTIPOINT_1: string;
    export { MULTIPOINT_1 as MULTIPOINT };
    const POINT_1: string;
    export { POINT_1 as POINT };
    const POLYLINE_1: string;
    export { POLYLINE_1 as POLYLINE };
    export const POLYGON: string;
}
export class ImageContentItem extends ContentItem {
    constructor(options: any);
    ReferencedSOPSequence: {
        ReferencedSOPClassUID: any;
        ReferencedSOPInstanceUID: any;
        ReferencedFrameNumber: any;
        ReferencedSegmentNumber: any;
    }[];
}
export class NumContentItem extends ContentItem {
    constructor(options: any);
    MeasuredValueSequence: {
        NumericValue: any;
        MeasurementUnitsCodeSequence: any;
    }[];
    NumericValueQualifierCodeSequence: any[];
}
export class PNameContentItem extends ContentItem {
    constructor(options: any);
    PersonName: any;
}
export namespace PixelOriginInterpretations {
    const FRAME: string;
    const VOLUME: string;
}
export namespace RelationshipTypes {
    const CONTAINS: string;
    const HAS_ACQ_CONTENT: string;
    const HAS_CONCEPT_MOD: string;
    const HAS_OBS_CONTEXT: string;
    const HAS_PROPERTIES: string;
    const INFERRED_FROM: string;
    const SELECTED_FROM: string;
}
export class ScoordContentItem extends ContentItem {
    constructor(options: any);
    GraphicData: any;
    FiducialUID: any;
}
export class Scoord3DContentItem extends ContentItem {
    constructor(options: any);
    GraphicType: any;
    GraphicData: any;
    ReferencedFrameOfReferenceUID: any;
    FiducialUID: any;
}
export class TcoordContentItem extends ContentItem {
    constructor(options: any);
    ReferencedSamplePositions: any;
    ReferencedTimeOffsets: any;
    ReferencedDateTime: any;
}
export namespace TemporalRangeTypes {
    export const BEGIN: string;
    export const END: string;
    const MULTIPOINT_2: string;
    export { MULTIPOINT_2 as MULTIPOINT };
    export const MULTISEGMENT: string;
    const POINT_2: string;
    export { POINT_2 as POINT };
    export const SEGMENT: string;
}
export class TextContentItem extends ContentItem {
    constructor(options: any);
    TextValue: any;
}
export class TimeContentItem extends ContentItem {
    constructor(options: any);
    Time: string;
}
export class UIDRefContentItem extends ContentItem {
    constructor(options: any);
    UID: any;
}
export namespace ValueTypes {
    const CODE: string;
    const COMPOSITE: string;
    const CONTAINER: string;
    const DATE: string;
    const DATETIME: string;
    const IMAGE: string;
    const NUM: string;
    const PNAME: string;
    const SCOORD: string;
    const SCOORD3D: string;
    const TCOORD: string;
    const TEXT: string;
    const TIME: string;
    const UIDREF: string;
    const WAVEFORM: string;
}
declare class ContentItem {
    constructor(options: any);
    ConceptNameCodeSequence: any[];
    ValueType: any;
    RelationshipType: any;
}
export {};

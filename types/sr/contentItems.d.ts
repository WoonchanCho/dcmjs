export class FindingSite extends CodeContentItem {
    constructor(options: any);
    ContentSequence: ContentSequence;
}
export class LongitudinalTemporalOffsetFromEvent extends NumContentItem {
    constructor(options: any);
    ContentSequence: ContentSequence;
}
export class ReferencedRealWorldValueMap extends CompositeContentItem {
    constructor(options: any);
}
export class ImageRegion extends ScoordContentItem {
    constructor(options: any);
    ContentSequence: ContentSequence;
}
export class ImageRegion3D extends Scoord3DContentItem {
    constructor(options: any);
}
export class ReferencedSegmentation extends ContentSequence {
    constructor(options: any);
}
export class ReferencedSegmentationFrame extends ContentSequence {
    constructor(options: any);
}
export class VolumeSurface extends Scoord3DContentItem {
    constructor(options: any);
    ContentSequence: ContentSequence;
}
export class SourceImageForRegion extends ImageContentItem {
    constructor(options: any);
}
export class SourceImageForSegmentation extends ImageContentItem {
    constructor(options: any);
}
export class SourceSeriesForSegmentation extends UIDRefContentItem {
    constructor(options: any);
}
import { CodeContentItem } from "./valueTypes.js";
import { ContentSequence } from "./valueTypes.js";
import { NumContentItem } from "./valueTypes.js";
import { CompositeContentItem } from "./valueTypes.js";
import { ScoordContentItem } from "./valueTypes.js";
import { Scoord3DContentItem } from "./valueTypes.js";
import { ImageContentItem } from "./valueTypes.js";
import { UIDRefContentItem } from "./valueTypes.js";

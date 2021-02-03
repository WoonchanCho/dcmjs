export class Normalizer {
    static consistentSOPClassUIDs(datasets: any): undefined;
    static normalizerForSOPClassUID(sopClassUID: any): any;
    static isMultiframeSOPClassUID(sopClassUID: any): boolean;
    static isMultiframeDataset(ds?: any): boolean;
    static normalizeToDataset(datasets: any): any;
    constructor(datasets: any);
    datasets: any;
    dataset: any;
    normalize(): string;
}
export class ImageNormalizer extends Normalizer {
    static vec3CrossProduct(a: any, b: any): number[];
    static vec3Subtract(a: any, b: any): number[];
    static vec3Dot(a: any, b: any): number;
    constructor(datasets: any);
    convertToMultiframe(): void;
    derivation: DerivedImage;
    normalizeMultiframe(): void;
}
export class MRImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class EnhancedCTImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class EnhancedMRImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class EnhancedUSVolumeNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class CTImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class PETImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class SEGImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class PMImageNormalizer extends ImageNormalizer {
    constructor(datasets: any);
}
export class DSRNormalizer extends Normalizer {
    constructor(datasets: any);
}
import { DerivedImage } from "./derivations/index.js";

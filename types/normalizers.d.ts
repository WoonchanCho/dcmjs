/**
 * Parent (abstract) class for normalization
 */
export class Normalizer {
    /**
     * return sopClassUID if all exist and match, otherwise undefined
     * @param {any[]} datasets
     * @returns {string|undefined} SOP Class UID
     */
    static consistentSOPClassUIDs(datasets: any[]): string | undefined;
    /**
     * Retrieve a Normalzer class matched with SOP class UID
     * @param {string} sopClassUID
     * @returns {Normalizer|undefined} Normalizer decendant class or undefined
     */
    static normalizerForSOPClassUID(sopClassUID: string): Normalizer | undefined;
    /**
     * Check if the SOP Class UID given is a muliframe type
     * @param {string} sopClassUID
     * @returns {boolean} True if the SOP Class UID is a multiframe type
     */
    static isMultiframeSOPClassUID(sopClassUID: string): boolean;
    /**
     * Check if the dataset has multiframe type SOP Class UID
     * @param {Object} dataset
     * @returns {boolean} True if the dataset has the SOP Class UID which is a multiframe type
     */
    static isMultiframeDataset(ds?: any): boolean;
    /**
     * Normalize the given datasets
     * @param {Object[]} datasets
     * @returns {Object} Normalized dataset
     */
    static normalizeToDataset(datasets: any[]): any;
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
    datasets: any[];
    dataset: any;
    /**
     * normalize will be implemented in the child classes
     * @returns {string} No normalization defined
     */
    normalize(): string;
}
export class ImageNormalizer extends Normalizer {
    static vec3CrossProduct(a: any, b: any): number[];
    static vec3Subtract(a: any, b: any): number[];
    static vec3Dot(a: any, b: any): number;
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
    convertToMultiframe(): void;
    derivation: DerivedImage;
    normalizeMultiframe(): void;
}
export class MRImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class EnhancedCTImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class EnhancedMRImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class EnhancedUSVolumeNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class CTImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class PETImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class SEGImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class PMImageNormalizer extends ImageNormalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
export class DSRNormalizer extends Normalizer {
    /**
     * Create Normaizer object
     * @param {any[]} datasets
     */
    constructor(datasets: any[]);
}
import { DerivedImage } from "./derivations/index.js";

/**
 * Class representing DicomMeta Dictionary
 */
export class DicomMetaDictionary {
    /**
     * Convert a raw tag string into a formatted tag string (e.g, convert 00080008 into (0008,0008))
     * @param {string} rawTag - 8-character tag string
     * @returns {string} Formatted tag strimg
     */
    static punctuateTag(rawTag: string): string;
    /**
     * Convert a formatted tag string into raw tag string (e.g, convert (0008,0008) into 00080008)
     * @param {string} rawTag - 8-character tag string
     * @returns {string} 8-character tag string
     */
    static unpunctuateTag(tag: any): string;
    /**
     * Clean dataset
     * @param {Object} dataset DICOM JSON Model dataset object
     */
    static cleanDataset(dataset: any): {};
    /**
     * Unlike naturalizeDataset, this only changes the names of the member variables but leaves the values intact
     * @param {Object} dataset DICOM JSON Model dataset object
     * @returns {Object} Named dataset
     */
    static namifyDataset(dataset: any): any;
    /**
     * Convert from DICOM JSON Model dataset to a naturalized dataset
     * - sequences become lists
     * - single element lists are replaced by their first element
     * - object member names are dictionary, not group/element tag
     * @param {Object} dataset Raw DICOM JSON object
     * @returns {Object} Naturalized dataset
     */
    static naturalizeDataset(dataset: any): any;
    static denaturalizeValue(naturalValue: any): any;
    /**
     * Convert from a naturalized dataset to a DICOM JSON Model dataset
     * @param {Object} dataset - Naturalized dataset
     * @returns {Object} Raw DICOM JSON object
     */
    static denaturalizeDataset(dataset: any): any;
    /**
     * Randomly create UID
     * @returns {string} Randomly created UID that begins with "2.25."
     */
    static uid(): string;
    /**
     * Return UTC Date string (yyyyMMdd)
     * @returns {string} yyyyMMdd
     */
    static date(): string;
    /**
     * Return UTC Time string (HHmmss)
     * @returns {string} HHmmss
     */
    static time(): string;
    /**
     * Return UTC DateTime string (yyyyMMddHHmmss.SSS)
     * @returns {string} yyyyMMddHHmmss.SSS
     */
    static dateTime(): string;
    /**
     * Generate Named map
     */
    static _generateNameMap(): void;
    /**
     * Generate UID map
     */
    static _generateUIDMap(): void;
}
export namespace DicomMetaDictionary {
    export const sopClassNamesByUID: {
        "1.2.840.10008.5.1.4.1.1.2": string;
        "1.2.840.10008.5.1.4.1.1.2.1": string;
        "1.2.840.10008.5.1.4.1.1.2.2": string;
        "1.2.840.10008.5.1.4.1.1.3.1": string;
        "1.2.840.10008.5.1.4.1.1.4": string;
        "1.2.840.10008.5.1.4.1.1.4.1": string;
        "1.2.840.10008.5.1.4.1.1.4.2": string;
        "1.2.840.10008.5.1.4.1.1.4.3": string;
        "1.2.840.10008.5.1.4.1.1.4.4": string;
        "1.2.840.10008.5.1.4.1.1.6.1": string;
        "1.2.840.10008.5.1.4.1.1.6.2": string;
        "1.2.840.10008.5.1.4.1.1.7": string;
        "1.2.840.10008.5.1.4.1.1.30": string;
        "1.2.840.10008.5.1.4.1.1.66": string;
        "1.2.840.10008.5.1.4.1.1.66.1": string;
        "1.2.840.10008.5.1.4.1.1.66.2": string;
        "1.2.840.10008.5.1.4.1.1.66.3": string;
        "1.2.840.10008.5.1.4.1.1.66.4": string;
        "1.2.840.10008.5.1.4.1.1.67": string;
        "1.2.840.10008.5.1.4.1.1.88.11": string;
        "1.2.840.10008.5.1.4.1.1.88.22": string;
        "1.2.840.10008.5.1.4.1.1.88.33": string;
        "1.2.840.10008.5.1.4.1.1.128": string;
        "1.2.840.10008.5.1.4.1.1.130": string;
        "1.2.840.10008.5.1.4.1.1.128.1": string;
    };
    export { dictionary };
}
import dictionary from "./dictionary.js";

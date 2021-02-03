export class DicomMetaDictionary {
    static punctuateTag(rawTag: any): any;
    static unpunctuateTag(tag: any): any;
    static cleanDataset(dataset: any): {};
    static namifyDataset(dataset: any): {};
    static naturalizeDataset(dataset: any): {
        _vrMap: {};
    };
    static denaturalizeValue(naturalValue: any): any;
    static denaturalizeDataset(dataset: any): {};
    static uid(): string;
    static date(): string;
    static time(): string;
    static dateTime(): string;
    static _generateNameMap(): void;
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

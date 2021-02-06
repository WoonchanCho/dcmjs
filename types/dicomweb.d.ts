/**
 * JavaScript DICOMweb REST API for browser use.
 * Design:
 * * map rest api to high-level code with modern conventions
 * * ES6: classes, arrow functions, let...
 * * promises
 * * json converted to objects
 *
 * examples: see tests() method below.
 */
export class DICOMWEB {
    static responseType(endpoint: any): any;
    static endpointService(endpoint: any): any;
    static randomEntry(array: any): any;
    constructor(options?: {});
    rootURL: any;
    progressCallback: any;
    request(endpoint: any, parameters: {}, payload: any): Promise<any>;
    patients(): Promise<any>;
    studies(patientID: any): Promise<any>;
    series(studyInstanceUID: any): Promise<any>;
    instances(studyInstanceUID: any, seriesInstanceUID: any): Promise<any>;
    instance(studyInstanceUID: any, seriesInstanceUID: any, sopInstanceUID: any): Promise<any>;
    tests(): void;
}

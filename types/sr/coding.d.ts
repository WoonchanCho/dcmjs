export class Code {
    constructor(options: any);
    get value(): any;
    get meaning(): any;
    get schemeDesignator(): any;
    get schemeVersion(): any;
}
export class CodedConcept {
    constructor(options: any);
    CodeValue: any;
    CodeMeaning: any;
    CodingSchemeDesignator: any;
    CodingSchemeVersion: any;
    equals(other: any): boolean;
    get value(): any;
    get meaning(): any;
    get schemeDesignator(): any;
    get schemeVersion(): any;
}

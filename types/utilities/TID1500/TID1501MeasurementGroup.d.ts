export default class TID1501MeasurementGroup {
    constructor(TID300Measurements: any);
    TID300Measurements: any;
    contentItem(): any[];
    getMeasurementGroup(contentSequenceEntries: any): {
        RelationshipType: string;
        ValueType: string;
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        ContinuityOfContent: string;
        ContentSequence: any[];
    };
}

export default class TID300Measurement {
    constructor(props: any);
    ReferencedSOPSequence: any;
    props: any;
    getMeasurement(contentSequenceEntries: any): any[];
    getTrackingGroups(): ({
        RelationshipType: string;
        ValueType: string;
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        TextValue: any;
        UID?: undefined;
    } | {
        RelationshipType: string;
        ValueType: string;
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        UID: string;
        TextValue?: undefined;
    })[];
    getFindingGroup(): {
        RelationshipType: string;
        ValueType: string;
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        ConceptCodeSequence: {
            CodeValue: any;
            CodingSchemeDesignator: any;
            CodeMeaning: any;
        };
    }[];
    getFindingSiteGroups(): any;
}

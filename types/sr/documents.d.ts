export class Comprehensive3DSR {
    constructor(options: any);
    SOPClassUID: string;
    SOPInstanceUID: any;
    Modality: string;
    SeriesDescription: any;
    SeriesInstanceUID: any;
    SeriesNumber: any;
    InstanceNumber: any;
    Manufacturer: any;
    InstitutionName: any;
    InstitutionalDepartmentName: any;
    CompletionFlag: string;
    VerificationFlag: string;
    VerifyingObserverSequence: any[];
    PreliminaryFlag: string;
    ContentDate: string;
    ContentTime: string;
    ReferencedRequestSequence: any;
    CurrentRequestedProcedureEvidenceSequence: {
        StudyInstanceUID: any;
        ReferencedSeriesSequence: any[];
    }[];
    PertinentOtherEvidenceSequence: {
        StudyInstanceUID: any;
        ReferencedSeriesSequence: any[];
    }[];
    PredecessorDocumentsSequence: {
        StudyInstanceUID: any;
        ReferencedSeriesSequence: any[];
    }[];
    PerformedProcedureCodeSequence: any;
    ReferencedPerformedProcedureStepSequence: any[];
}

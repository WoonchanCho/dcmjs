import { DicomMetaDictionary } from "./DicomMetaDictionary.js";
import { DicomDict } from "./DicomDict.js";

/**
 * Convert from a naturalized dataset to a raw JSON object with DICOM JSON Model dataset and its meta information
 * @param {Object} dataset Naturalized dataset
 * @returns {Object} raw JSON object with DICOM JSON Model dataset and its meta information
 */
function datasetToDict(dataset) {
    const fileMetaInformationVersionArray = new Uint8Array(2);
    fileMetaInformationVersionArray[1] = 1;

    const TransferSyntaxUID =
        dataset._meta.TransferSyntaxUID &&
        dataset._meta.TransferSyntaxUID.Value &&
        dataset._meta.TransferSyntaxUID.Value[0]
            ? dataset._meta.TransferSyntaxUID.Value[0]
            : "1.2.840.10008.1.2.1";

    dataset._meta = {
        MediaStorageSOPClassUID: dataset.SOPClassUID,
        MediaStorageSOPInstanceUID: dataset.SOPInstanceUID,
        ImplementationVersionName: "dcmjs-0.0",
        TransferSyntaxUID,
        ImplementationClassUID:
            "2.25.80302813137786398554742050926734630921603366648225212145404",
        FileMetaInformationVersion: fileMetaInformationVersionArray.buffer
    };

    const denaturalized = DicomMetaDictionary.denaturalizeDataset(
        dataset._meta
    );
    const dicomDict = new DicomDict(denaturalized);
    dicomDict.dict = DicomMetaDictionary.denaturalizeDataset(dataset);
    return dicomDict;
}

/**
 * Construct a Buffer object using a naturalized dataset
 * @param {Object} dataset - Naturalized dataset
 * @returns {Buffer} Buffer object
 */
function datasetToBuffer(dataset) {
    return Buffer.from(datasetToDict(dataset).write());
}

/**
 * Construct a Blob object using a naturalized dataset
 * @param {Object} dataset - Naturalized dataset
 * @returns {Blob} Blob object
 */
function datasetToBlob(dataset) {
    const buffer = datasetToBuffer(dataset);
    return new Blob([buffer], { type: "application/dicom" });
}

export { datasetToBlob, datasetToBuffer, datasetToDict };

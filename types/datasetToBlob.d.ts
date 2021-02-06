/**
 * Construct a Blob object using a naturalized dataset
 * @param {Object} dataset - Naturalized dataset
 * @returns {Blob} Blob object
 */
export function datasetToBlob(dataset: any): Blob;
/**
 * Construct a Buffer object using a naturalized dataset
 * @param {Object} dataset - Naturalized dataset
 * @returns {Buffer} Buffer object
 */
export function datasetToBuffer(dataset: any): Buffer;
/**
 * Convert from a naturalized dataset to a raw JSON object with DICOM JSON Model dataset and its meta information
 * @param {Object} dataset Naturalized dataset
 * @returns {Object} raw JSON object with DICOM JSON Model dataset and its meta information
 */
export function datasetToDict(dataset: any): any;

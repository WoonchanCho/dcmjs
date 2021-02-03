export default Segmentation;
declare namespace Segmentation {
    export { generateSegmentation };
    export { generateToolState };
    export { fillSegmentation };
}
/**
 * generateSegmentation - Generates a DICOM Segmentation object given cornerstoneTools data.
 *
 * @param  {object[]} images    An array of the cornerstone image objects.
 * @param  {Object|Object[]} labelmaps3DorBrushData For 4.X: The cornerstone `Labelmap3D` object, or an array of objects.
 *                                                  For 3.X: the BrushData.
 * @param  {number} cornerstoneToolsVersion The cornerstoneTools major version to map against.
 * @returns {Object}
 */
declare function generateSegmentation(images: object[], labelmaps3DorBrushData: any | any[], options?: {
    includeSliceSpacing: boolean;
}, cornerstoneToolsVersion?: number): any;
/**
 * generateToolState - Given a set of cornrstoneTools imageIds and a Segmentation buffer,
 * derive cornerstoneTools toolState and brush metadata.
 *
 * @param  {string[]} imageIds    An array of the imageIds.
 * @param  {ArrayBuffer} arrayBuffer The SEG arrayBuffer.
 * @param {*} metadataProvider
 * @returns {Object}  The toolState and an object from which the
 *                    segment metadata can be derived.
 */
declare function generateToolState(imageIds: string[], arrayBuffer: ArrayBuffer, metadataProvider: any, cornerstoneToolsVersion?: number): any;
/**
 * fillSegmentation - Fills a derived segmentation dataset with cornerstoneTools `LabelMap3D` data.
 *
 * @param  {object[]} segmentation An empty segmentation derived dataset.
 * @param  {Object|Object[]} inputLabelmaps3D The cornerstone `Labelmap3D` object, or an array of objects.
 * @param  {Object} userOptions Options object to override default options.
 * @returns {Blob}           description
 */
declare function fillSegmentation(segmentation: object[], inputLabelmaps3D: any | any[], options?: {
    includeSliceSpacing: boolean;
}, cornerstoneToolsVersion?: number): Blob;

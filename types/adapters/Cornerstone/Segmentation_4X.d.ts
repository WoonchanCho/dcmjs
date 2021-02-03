export default Segmentation;
export type BrushData = {
    /**
     * - The cornerstoneTools global toolState.
     */
    toolState: any;
    /**
     * - The cornerstoneTools segment metadata that corresponds to the
     *   seriesInstanceUid.
     */
    segments: any[];
};
declare namespace Segmentation {
    export { generateSegmentation };
    export { generateToolState };
    export { fillSegmentation };
}
/**
 * generateSegmentation - Generates cornerstoneTools brush data, given a stack of
 * imageIds, images and the cornerstoneTools brushData.
 *
 * @param  {object[]} images An array of cornerstone images that contain the source
 *                           data under `image.data.byteArray.buffer`.
 * @param  {Object|Object[]} inputLabelmaps3D The cornerstone `Labelmap3D` object, or an array of objects.
 * @param  {Object} userOptions Options to pass to the segmentation derivation and `fillSegmentation`.
 * @returns {Blob}
 */
declare function generateSegmentation(images: object[], inputLabelmaps3D: any | any[], userOptions?: any): Blob;
/**
 * generateToolState - Given a set of cornrstoneTools imageIds and a Segmentation buffer,
 * derive cornerstoneTools toolState and brush metadata.
 *
 * @param  {string[]} imageIds    An array of the imageIds.
 * @param  {ArrayBuffer} arrayBuffer The SEG arrayBuffer.
 * @param  {*} metadataProvider
 *
 * @return {[]ArrayBuffer}a list of array buffer for each labelMap
 * @return {Object} an object from which the segment metadata can be derived
 * @return {[][][]} 2D list containing the track of segments per frame
 * @return {[][][]} 3D list containing the track of segments per frame for each labelMap
 *                  (available only for the overlapping case).
 */
declare function generateToolState(imageIds: string[], arrayBuffer: ArrayBuffer, metadataProvider: any, skipOverlapping?: boolean): [];
/**
 * fillSegmentation - Fills a derived segmentation dataset with cornerstoneTools `LabelMap3D` data.
 *
 * @param  {object[]} segmentation An empty segmentation derived dataset.
 * @param  {Object|Object[]} inputLabelmaps3D The cornerstone `Labelmap3D` object, or an array of objects.
 * @param  {Object} userOptions Options object to override default options.
 * @returns {Blob}           description
 */
declare function fillSegmentation(segmentation: object[], inputLabelmaps3D: any | any[], userOptions?: any): Blob;

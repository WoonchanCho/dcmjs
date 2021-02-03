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
}
/**
 *
 * @typedef {Object} BrushData
 * @property {Object} toolState - The cornerstoneTools global toolState.
 * @property {Object[]} segments - The cornerstoneTools segment metadata that corresponds to the
 *                                 seriesInstanceUid.
 */
/**
 * generateSegmentation - Generates cornerstoneTools brush data, given a stack of
 * imageIds, images and the cornerstoneTools brushData.
 *
 * @param  {object[]} images    An array of the cornerstone image objects.
 * @param  {BrushData} brushData and object containing the brushData.
 * @returns {type}           description
 */
declare function generateSegmentation(images: object[], brushData: BrushData, options?: {
    includeSliceSpacing: boolean;
}): any;
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
declare function generateToolState(imageIds: string[], arrayBuffer: ArrayBuffer, metadataProvider: any): any;

export default class Segmentation extends DerivedPixels {
    constructor(datasets: any, options?: {
        includeSliceSpacing: boolean;
    });
    /**
     * setNumberOfFrames - Sets the number of frames of the segmentation object
     * and allocates (non-bitpacked) memory for the PixelData for constuction.
     *
     * @param  {type} NumberOfFrames The number of segmentation frames.
     */
    setNumberOfFrames(NumberOfFrames: any): void;
    /**
     * bitPackPixelData - Bitpacks the pixeldata, should be called after all
     * segments are addded.
     *
     * @returns {type}  description
     */
    bitPackPixelData(): any;
    isBitpacked: boolean;
    /**
     * addSegmentFromLabelmap - Adds a segment to the dataset,
     * where the labelmaps are a set of 2D labelmaps, from which to extract the binary maps.
     *
     * @param  {type} Segment   The segment metadata.
     * @param  {Uint8Array[]} labelmaps labelmap arrays for each index of referencedFrameNumbers.
     * @param  {number}  segmentIndexInLabelmap The segment index to extract from the labelmap
     *    (might be different to the segment metadata depending on implementation).
     * @param  {number[]} referencedFrameNumbers  The frames that the
     *                                            segmentation references.
     *
     */
    addSegmentFromLabelmap(Segment: any, labelmaps: Uint8Array[], segmentIndexInLabelmap: number, referencedFrameNumbers: number[]): void;
    _addSegmentPixelDataFromLabelmaps(labelmaps: any, segmentIndex: any): void;
    _getOccupiedValue(): 1 | 255;
    /**
     * addSegment - Adds a segment to the dataset.
     *
     * @param  {type} Segment   The segment metadata.
     * @param  {Uint8Array} pixelData The pixelData array containing all frames
     *                                of the segmentation.
     * @param  {Number[]} referencedFrameNumbers  The frames that the
     *                                            segmentation references.
     *
     */
    addSegment(Segment: any, pixelData: Uint8Array, referencedFrameNumbers: number[]): void;
    _addSegmentPixelData(pixelData: any): void;
    _addPerFrameFunctionalGroups(ReferencedSegmentNumber: any, referencedFrameNumbers: any): void;
    _addSegmentMetadata(Segment: any): any;
}
import DerivedPixels from "./DerivedPixels.js";

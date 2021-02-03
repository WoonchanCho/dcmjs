export default BitArray;
export namespace BitArray {
    export { getBytesForBinaryFrame };
    export { pack };
    export { unpack };
}
declare function getBytesForBinaryFrame(numPixels: any): number;
declare function pack(pixelData: any): Uint8Array;
declare function unpack(bitPixelArray: any): Uint8Array;

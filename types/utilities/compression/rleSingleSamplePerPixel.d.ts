/**
 * Encodes a non-bitpacked frame which has one sample per pixel.
 *
 * @param {*} buffer
 * @param {*} numberOfFrames
 * @param {*} rows
 * @param {*} cols
 */
export function encode(buffer: any, numberOfFrames: any, rows: any, cols: any): ArrayBuffer[];
export function decode(rleEncodedFrames: any, rows: any, cols: any): Uint8Array;

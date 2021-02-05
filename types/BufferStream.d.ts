/**
 * Class representing a BufferStream for reading
 * @extends BufferStream
 */
export class ReadBufferStream extends BufferStream {
    /**
     * Create a ReadBufferStream
     * @param {BufferStream} buffer
     * @param {string} littleEndian
     */
    constructor(buffer: BufferStream, littleEndian: string);
}
/**
 * Class representing a BufferStream for writing
 * @extends BufferStream
 */
export class WriteBufferStream extends BufferStream {
    /**
     * Create a ReadBufferStream
     * @param {BufferStream} buffer
     * @param {string} littleEndian
     */
    constructor(buffer: BufferStream, littleEndian: string);
}
/**
 * Class representing a BufferStream
 */
declare class BufferStream {
    /**
     * Create a ReadBufferStream
     * @param {number|ArrayBuffer} sizeOrBuffer - Size of buffer in number or array buffer of the image file
     * @param {boolean} [littleEndian=false] - Whether the data elements are encoded as a Little Endian or not
     */
    constructor(sizeOrBuffer: number | ArrayBuffer, littleEndian?: boolean);
    buffer: ArrayBuffer;
    view: DataView;
    offset: number;
    isLittleEndian: boolean;
    size: number;
    /**
     * Set an encoding of the data elements
     * @param {boolean} littleEndian - Whether the data elements are encoded as a Little Endian or not
     * @return {void}
     */
    setEndian(isLittle: any): void;
    /**
     * Write an 8-bit unsigned integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeUint8(value: number | string): number;
    /**
     * Write an 8-bit signed integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeInt8(value: number | string): number;
    /**
     * Write an 16-bit unsigned integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeUint16(value: number | string): number;
    /**
     * Write an 16-bit signed integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeInt16(value: number | string): number;
    /**
     * Write an 32-bit unsigned integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeUint32(value: number | string): number;
    /**
     * Write an 32-bit signed integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeInt32(value: number | string): number;
    /**
     * Write a 32-bit floating-point number to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeFloat(value: number | string): number;
    /**
     * Write a 64-bit floating-point number to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeDouble(value: number | string): number;
    /**
     * Write a string to buffer
     * @param {string} value - String to write
     * @return {number} Added bytes
     */
    writeString(value: string): number;
    /**
     * Write a hex string to buffer
     * @param {string} value - Hex String to write (2 characters represent 1 byte.)
     * @return {number} Added bytes
     */
    writeHex(value: string): number;
    /**
     * Read a 32-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint32(): number;
    /**
     * Read a 16-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint16(): number;
    /**
     * Read a 8-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint8(): number;
    /**
     * Read a 8-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint8Array(length: any): number;
    /**
     * Read the specified length of 16-bit unsinged integers from buffer
     * @param {number} length - The number of 16-bit unsigned integers to read
     * @return {Uint16Array} An array of 16-bit unsigned integers.
     */
    readUint16Array(length: number): Uint16Array;
    /**
     * Read a 16-bit signed integer number from buffer
     * @return {number} Number read
     */
    readInt16(): number;
    /**
     * Read a 32-bit signed integer number from buffer
     * @return {number} Number read
     */
    readInt32(): number;
    /**
     * Read a 32-bit floating-point number from buffer
     * @return {number} Number read
     */
    readFloat(): number;
    /**
     * Read a 64-bit floating-point number from buffer
     * @return {number} Number read
     */
    readDouble(): number;
    /**
     * Read the specified length of string from buffer
     * @param {number} - The length of string to read
     * @return {string} String read
     */
    readString(length: any): string;
    /**
     * Read the specified length of string from buffer
     * @param {number} - The length of string to read
     * @return {string} Hex string read
     */
    readHex(length: any): string;
    /**
     * Check if there is available space of the step bytes in the buffer and if not increase a buffer
     * @param {number} step - The required bytes in length
     */
    checkSize(step: number): void;
    /**
     * Append the entered ArrayBuffer to the existing buffer
     * @param {ArrayBuffer} stream - ArrayBuffer to append
     * @returns {number} The new lengh of the buffer
     */
    concat(stream: ArrayBuffer): number;
    /**
     * Move the offset forward by the length of step
     * @param {number} step
     * @return {number} step
     */
    increment(step: number): number;
    /**
     * Get a copied buffer from the start offset to the end offset
     * @param {number} start - The start offset
     * @param {number} end  - The end offset
     * @returns {ArrayBuffer} - The newly allocated ArrayBuffer object
     */
    getBuffer(start: number, end: number): ArrayBuffer;
    /**
     * Create an ReadBufferStream of the given length begining from the current offset
     * @param {number} length - The length of buffer to allocate
     * @returns {ReadBufferStream} - The new ReadBufferStream object
     */
    more(length: number): ReadBufferStream;
    /**
     * Move the offset to the begining of the stream
     * @returns {BufferStream} BufferStream object itself
     */
    reset(): BufferStream;
    /**
     * Check if the current offset points to the end of the buffer
     * @returns {boolean} True if the offset points to the end of the buffer
     */
    end(): boolean;
    /**
     * Move the offset to the end
     */
    toEnd(): void;
}
export {};

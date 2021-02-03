export class ReadBufferStream extends BufferStream {
    constructor(buffer: any, littleEndian: any);
}
export class WriteBufferStream extends BufferStream {
    constructor(buffer: any, littleEndian: any);
}
declare class BufferStream {
    constructor(sizeOrBuffer: any, littleEndian: any);
    buffer: any;
    view: DataView;
    offset: number;
    isLittleEndian: any;
    size: number;
    setEndian(isLittle: any): void;
    writeUint8(value: any): any;
    writeInt8(value: any): any;
    writeUint16(value: any): any;
    writeInt16(value: any): any;
    writeUint32(value: any): any;
    writeInt32(value: any): any;
    writeFloat(value: any): any;
    writeDouble(value: any): any;
    writeString(value: any): any;
    writeHex(value: any): any;
    readUint32(): number;
    readUint16(): number;
    readUint8(): number;
    readUint8Array(length: any): Uint8Array;
    readUint16Array(length: any): Uint16Array;
    readInt16(): number;
    readInt32(): number;
    readFloat(): number;
    readDouble(): number;
    readString(length: any): string;
    readHex(length: any): string;
    checkSize(step: any): void;
    concat(stream: any): any;
    increment(step: any): any;
    getBuffer(start: any, end: any): any;
    more(length: any): ReadBufferStream;
    reset(): BufferStream;
    end(): boolean;
    toEnd(): void;
}
export {};

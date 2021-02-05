/**
 * Class representing Dicom Message (Only contains static methods)
 */
export class DicomMessage {
    /**
     *
     * @param {ReadBufferStream} bufferStream
     * @param {*} syntax
     * @param {*} ignoreErrors
     */
    static read(bufferStream: ReadBufferStream, syntax: any, ignoreErrors: any): {};
    static _normalizeSyntax(syntax: any): any;
    static isEncapsulated(syntax: any): boolean;
    static readFile(buffer: any, options?: {
        ignoreErrors: boolean;
    }): DicomDict;
    static writeTagObject(stream: any, tagString: any, vr: any, values: any, syntax: any): void;
    static write(jsonObjects: any, useStream: any, syntax: any, writeOptions: any): number;
    /**
     * @typedef TagInfo
     * @property {Tag} tag - Tag object
     * @property {ValueRepresentation} vr - VR object
     * @property {any[]} values - An array of values
     */
    /**
     * Read a tag from buffer
     * @param {ReadBufferStream} stream - Buffer
     * @param {string} syntax - DICOM transfer syntax
     * @returns {TagInfo} Tag info
     */
    static readTag(stream: ReadBufferStream, syntax: string): {
        /**
         * - Tag object
         */
        tag: Tag;
        /**
         * - VR object
         */
        vr: ValueRepresentation;
        /**
         * - An array of values
         */
        values: any[];
    };
    static lookupTag(tag: any): any;
}
import { ReadBufferStream } from "./BufferStream.js";
import { DicomDict } from "./DicomDict.js";
import { Tag } from "./Tag.js";
import { ValueRepresentation } from "./ValueRepresentation.js";

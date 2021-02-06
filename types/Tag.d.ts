/**
 * Class representing Tag
 */
export class Tag {
    /**
     * Create a Tag object from a raw tag string
     * @param {number} group - Group Number
     * @param {number} element - Element number
     * @returns {Tag} Tag object
     */
    static fromString(str: any): Tag;
    /**
     * Create a Tag object from a formatted tag string
     * @param {number} group - Group Number
     * @param {number} element - Element number
     * @returns {Tag} Tag object
     */
    static fromPString(str: any): Tag;
    /**
     * Create a Tag object using a group and element number
     * @param {number} group - Group Number
     * @param {number} element - Element number
     * @returns {Tag} Tag object
     */
    static fromNumbers(group: number, element: number): Tag;
    /**
     * Read a tag from buffer
     * @param {ReadBufferStream} stream
     * @returns {Tag} Tag object
     */
    static readTag(stream: any): Tag;
    /**
     * Create a tag object
     * @param {number} value 4-byte tag number
     */
    constructor(value: number);
    value: number;
    /**
     * Get the formatted tag string of the tag (e.g, (00080008))
     * @return {string} Formatted tag string
     */
    toString(): string;
    /**
     * Get the 8-character tag string of the tag
     * @return {string} 8-character tag string
     */
    toCleanString(): string;
    /**
     * Check the tag value
     * @param {number} t
     * @returns {boolean} True if the tag number is matched
     */
    is(t: number): boolean;
    /**
     * Get 2-byte group number of the tag
     * @returns {number} Group number
     */
    group(): number;
    /**
     * Get 2-byte element number of the tag
     * @returns {number} Element number
     */
    element(): number;
    /**
     * Check if the tag is Pixel Tag
     * @return {boolean} True if the tag is a pixel tag (0x7fe00010)
     */
    isPixelDataTag(): boolean;
    /**
     * Write a tag to buffer
     * @param {WriteBufferStream} stream - Buffer to write
     * @param {string} vrType 2-character VR code
     * @param {any[]} values - Array of tag values
     * @param {string} syntax - Transfer syntax
     * @param {Object} writeOptions
     * @returns {number} Bytes written
     */
    write(stream: WriteBufferStream, vrType: string, values: any[], syntax: string, writeOptions: any): number;
}
import { WriteBufferStream } from "./BufferStream.js";

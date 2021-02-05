import { paddingLeft } from "./ValueRepresentation.js";
import { ValueRepresentation } from "./ValueRepresentation.js";
import { DicomMessage } from "./DicomMessage.js";
import { WriteBufferStream } from "./BufferStream.js";

var IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
var EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";

/**
 * Class representing Tag
 */
class Tag {
    /**
     * Create a tag object
     * @param {number} value 4-byte tag number
     */
    constructor(value) {
        this.value = value;
    }

    /**
     * Get the formatted tag string of the tag (e.g, (00080008))
     * @return {string} Formatted tag string
     */
    toString() {
        return (
            "(" +
            paddingLeft(
                "0000",
                this.group()
                    .toString(16)
                    .toUpperCase()
            ) +
            "," +
            paddingLeft(
                "0000",
                this.element()
                    .toString(16)
                    .toUpperCase()
            ) +
            ")"
        );
    }

    /**
     * Get the 8-character tag string of the tag
     * @return {string} 8-character tag string
     */
    toCleanString() {
        return (
            paddingLeft(
                "0000",
                this.group()
                    .toString(16)
                    .toUpperCase()
            ) +
            paddingLeft(
                "0000",
                this.element()
                    .toString(16)
                    .toUpperCase()
            )
        );
    }

    /**
     * Check the tag value
     * @param {number} t
     * @returns {boolean} True if the tag number is matched
     */
    is(t) {
        return this.value == t;
    }

    /**
     * Get 2-byte group number of the tag
     * @returns {number} Group number
     */
    group() {
        return this.value >>> 16;
    }

    /**
     * Get 2-byte element number of the tag
     * @returns {number} Element number
     */
    element() {
        return this.value & 0xffff;
    }

    /**
     * Check if the tag is Pixel Tag
     * @return {boolean} True if the tag is a pixel tag (0x7fe00010)
     */
    isPixelDataTag() {
        return this.is(0x7fe00010);
    }

    /**
     * Create a Tag object from a raw tag string
     * @param {number} group - Group Number
     * @param {number} element - Element number
     * @returns {Tag} Tag object
     */
    static fromString(str) {
        var group = parseInt(str.substring(0, 4), 16),
            element = parseInt(str.substring(4), 16);
        return Tag.fromNumbers(group, element);
    }

    /**
     * Create a Tag object from a formatted tag string
     * @param {number} group - Group Number
     * @param {number} element - Element number
     * @returns {Tag} Tag object
     */
    static fromPString(str) {
        var group = parseInt(str.substring(1, 5), 16),
            element = parseInt(str.substring(6, 10), 16);
        return Tag.fromNumbers(group, element);
    }

    /**
     * Create a Tag object using a group and element number
     * @param {number} group - Group Number
     * @param {number} element - Element number
     * @returns {Tag} Tag object
     */
    static fromNumbers(group, element) {
        return new Tag(((group << 16) | element) >>> 0);
    }

    /**
     * Read a tag from buffer
     * @param {ReadBufferStream} stream
     * @returns {Tag} Tag object
     */
    static readTag(stream) {
        var group = stream.readUint16(),
            element = stream.readUint16();
        return Tag.fromNumbers(group, element);
    }

    /**
     * Write a tag to buffer
     * @param {WriteBufferStream} stream - Buffer to write
     * @param {string} vrType 2-character VR type string
     * @param {any[]} values - Array of tag values
     * @param {string} syntax - Transfer syntax
     * @param {Object} writeOptions
     * @returns {number} Bytes written
     */
    write(stream, vrType, values, syntax, writeOptions) {
        var vr = ValueRepresentation.createByTypeString(vrType),
            useSyntax = DicomMessage._normalizeSyntax(syntax);

        var implicit = useSyntax == IMPLICIT_LITTLE_ENDIAN ? true : false,
            isLittleEndian =
                useSyntax == IMPLICIT_LITTLE_ENDIAN ||
                useSyntax == EXPLICIT_LITTLE_ENDIAN
                    ? true
                    : false,
            isEncapsulated = DicomMessage.isEncapsulated(syntax);

        var oldEndian = stream.isLittleEndian;
        stream.setEndian(isLittleEndian);

        stream.writeUint16(this.group());
        stream.writeUint16(this.element());

        var tagStream = new WriteBufferStream(256),
            valueLength;
        tagStream.setEndian(isLittleEndian);

        if (vrType == "OW" || vrType == "OB") {
            valueLength = vr.writeBytes(
                tagStream,
                values,
                useSyntax,
                isEncapsulated,
                writeOptions
            );
        } else {
            valueLength = vr.writeBytes(
                tagStream,
                values,
                useSyntax,
                writeOptions
            );
        }

        if (vrType == "SQ") {
            valueLength = 0xffffffff;
        }
        var written = tagStream.size + 4;

        if (implicit) {
            stream.writeUint32(valueLength);
            written += 4;
        } else {
            if (vr.isExplicit()) {
                stream.writeString(vr.type);
                stream.writeHex("0000");
                stream.writeUint32(valueLength);
                written += 8;
            } else {
                stream.writeString(vr.type);
                stream.writeUint16(valueLength);
                written += 4;
            }
        }

        stream.concat(tagStream);

        stream.setEndian(oldEndian);

        return written;
    }
}

export { Tag };

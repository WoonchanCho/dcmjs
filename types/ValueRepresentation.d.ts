/**
 * Class representing the AE Value Representation
 * @extends StringRepresentation
 */
export class ApplicationEntity extends StringRepresentation {
    maxLength: number;
    padByte: string;
    fillWith: string;
}
/**
 * Class representing the CS Value Representation
 * @extends StringRepresentation
 */
export class CodeString extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
/**
 * Class representing the AS Value Representation
 * @extends StringRepresentation
 */
export class AgeString extends StringRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: string;
}
/**
 * Class representing the AT Value Representation
 * @extends ValueRepresentation
 */
export class AttributeTag extends ValueRepresentation {
    maxLength: number;
    valueLength: number;
    padByte: string;
    fixed: boolean;
}
/**
 * Class representing the DA Value Representation
 * @extends StringRepresentation
 */
export class DateValue extends StringRepresentation {
    constructor(value: any);
    maxLength: number;
    padByte: string;
    defaultValue: string;
}
/**
 * Class representing the DS Value Representation
 * @extends StringRepresentation
 */
export class DecimalString extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
/**
 * Class representing the DT Value Representation
 * @extends StringRepresentation
 */
export class DateTime extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
/**
 * Class representing the FL Value Representation
 * @extends ValueRepresentation
 */
export class FloatingPointSingle extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
/**
 * Class representing the FD Value Representation
 * @extends ValueRepresentation
 */
export class FloatingPointDouble extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
/**
 * Class representing the IS Value Representation
 * @extends StringRepresentation
 */
export class IntegerString extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
/**
 * Class representing the LO Value Representation
 * @extends StringRepresentation
 */
export class LongString extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
/**
 * Class representing the LT Value Representation
 * @extends StringRepresentation
 */
export class LongText extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
/**
 * Class representing the PN Value Representation
 * @extends StringRepresentation
 */
export class PersonName extends StringRepresentation {
    maxLength: any;
    padByte: string;
    checkLength(value: any): boolean;
}
/**
 * Class representing the SH Value Representation
 * @extends StringRepresentation
 */
export class ShortString extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
/**
 * Class representing the SL Value Representation
 * @extends ValueRepresentation
 */
export class SignedLong extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
/**
 * Class representing the SQ Value Representation
 * @extends ValueRepresentation
 */
export class SequenceOfItems extends ValueRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
/**
 * Class representing the SS Value Representation
 * @extends ValueRepresentation
 */
export class SignedShort extends ValueRepresentation {
    maxLength: number;
    valueLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
/**
 * Class representing the ST Value Representation
 * @extends StringRepresentation
 */
export class ShortText extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
/**
 * Class representing the TM Value Representation
 * @extends StringRepresentation
 */
export class TimeValue extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
/**
 * Class representing the UC Value Representation
 * @extends StringRepresentation
 */
export class UnlimitedCharacters extends StringRepresentation {
    maxLength: any;
    padByte: string;
}
/**
 * Class representing the UT Value Representation
 * @extends StringRepresentation
 */
export class UnlimitedText extends StringRepresentation {
    maxLength: any;
    padByte: string;
}
/**
 * Class representing the US Value Representation
 * @extends ValueRepresentation
 */
export class UnsignedShort extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
/**
 * Class representing the UL Value Representation
 * @extends ValueRepresentation
 */
export class UnsignedLong extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
/**
 * Class representing the UI Value Representation
 * @extends StringRepresentation
 */
export class UniqueIdentifier extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
/**
 * Class representing the UR Value Representation
 * @extends StringRepresentation
 */
export class UniversalResource extends StringRepresentation {
    maxLength: any;
    padByte: string;
}
/**
 * Class representing the UN Value Representation
 * @extends StringRepresentation
 */
export class UnknownValue extends StringRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
/**
 * Class representing the OW Value Representation
 * @extends BinaryRepresentation
 */
export class OtherWordString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
/**
 * Class representing the OW Value Representation
 * @extends BinaryRepresentation
 */
export class OtherByteString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
/**
 * Class representing the OD Value Representation
 * @extends BinaryRepresentation
 */
export class OtherDoubleString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
/**
 * Class representing the OF Value Representation
 * @extends BinaryRepresentation
 */
export class OtherFloatString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
/**
 * Class representing string-type Value Representations
 * @extends ValueRepresentation
 */
declare class StringRepresentation extends ValueRepresentation {
    constructor(type: any);
}
/**
 * Class representing Value Representations
 */
export class ValueRepresentation {
    /**
     * Create a Value Representation object matched with the 2-byte value type string incoming
     * @param {string} type - 2-byte VR type string (e.g., SH)
     * @returns {ValueRepresentation} a object of a ValueRepresentation decendant
     */
    static createByTypeString(type: string): ValueRepresentation;
    /**
     * Create a Value Representation
     */
    constructor(type: any);
    type: any;
    multi: boolean;
    /**
     * Check if the VR is binary-type
     * @returns {boolean} True if the VR is one of binary VRs
     */
    isBinary(): boolean;
    /**
     * Check if the VR can have multiple values
     * @returns {boolean} True if the VR can have multiple values
     */
    allowMultiple(): boolean;
    /**
     * Check if the VR is explict VR type
     * @return {boolean} True if the VR is one of explicit VRs
     */
    isExplicit(): boolean;
    read(stream: any, length: any, syntax: any): any;
    readBytes(stream: any, length: any): any;
    readNullPaddedString(stream: any, length: any): any;
    writeFilledString(stream: any, value: any, length: any): any;
    write(stream: any, type: any, ...args: any[]): any[];
    writeBytes(stream: any, value: any, lengths: any): number;
}
/**
 * Class representing binary-type Value Representations
 * @extends ValueRepresentation
 */
declare class BinaryRepresentation extends ValueRepresentation {
    constructor(type: any);
}
/**
 * Pad a string on left with padding Value
 * @param {string} paddingValue - Padding format string
 * @param {string} string - Original string
 * @returns {string} Left-padded string
 */
export function paddingLeft(paddingValue: string, string: string): string;
/**
 * Create a Tag object using a group and element number
 * @param {number} group - Group Number
 * @param {number} element - Element number
 * @returns {Tag} Tag object
 */
export function tagFromNumbers(group: number, element: number): Tag;
import { Tag } from "./Tag.js";
export {};

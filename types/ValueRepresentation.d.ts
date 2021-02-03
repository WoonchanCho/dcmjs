export class ApplicationEntity extends StringRepresentation {
    maxLength: number;
    padByte: string;
    fillWith: string;
}
export class CodeString extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
export class AgeString extends StringRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: string;
}
export class AttributeTag extends ValueRepresentation {
    maxLength: number;
    valueLength: number;
    padByte: string;
    fixed: boolean;
}
export class DateValue extends StringRepresentation {
    constructor(value: any);
    maxLength: number;
    padByte: string;
    defaultValue: string;
}
export class DecimalString extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
export class DateTime extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
export class FloatingPointSingle extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
export class FloatingPointDouble extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
export class IntegerString extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
export class LongString extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
export class LongText extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
export class PersonName extends StringRepresentation {
    maxLength: any;
    padByte: string;
    checkLength(value: any): boolean;
}
export class ShortString extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
export class SignedLong extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
export class SequenceOfItems extends ValueRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
export class SignedShort extends ValueRepresentation {
    maxLength: number;
    valueLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
export class ShortText extends StringRepresentation {
    maxCharLength: number;
    padByte: string;
}
export class TimeValue extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
export class UnlimitedCharacters extends StringRepresentation {
    maxLength: any;
    padByte: string;
}
export class UnlimitedText extends StringRepresentation {
    maxLength: any;
    padByte: string;
}
export class UnsignedShort extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
export class UnsignedLong extends ValueRepresentation {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
}
export class UniqueIdentifier extends StringRepresentation {
    maxLength: number;
    padByte: string;
}
export class UniversalResource extends StringRepresentation {
    maxLength: any;
    padByte: string;
}
export class UnknownValue extends StringRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
export class OtherWordString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
export class OtherByteString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
export class OtherDoubleString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
export class OtherFloatString extends BinaryRepresentation {
    maxLength: any;
    padByte: string;
    noMultiple: boolean;
}
declare class StringRepresentation extends ValueRepresentation {
    constructor(type: any);
}
export class ValueRepresentation {
    static createByTypeString(type: any): ApplicationEntity | AgeString | AttributeTag | CodeString | DateValue | DecimalString | DateTime | FloatingPointSingle | FloatingPointDouble | IntegerString | LongString | LongText | OtherByteString | OtherDoubleString | OtherFloatString | OtherWordString | PersonName | ShortString | SignedLong | SequenceOfItems | SignedShort | ShortText | TimeValue | UnlimitedCharacters | UniqueIdentifier | UnsignedLong | UnknownValue | UniversalResource | UnsignedShort | UnlimitedText;
    constructor(type: any);
    type: any;
    multi: boolean;
    isBinary(): boolean;
    allowMultiple(): boolean;
    isExplicit(): boolean;
    read(stream: any, length: any, syntax: any): any;
    readBytes(stream: any, length: any): any;
    readNullPaddedString(stream: any, length: any): any;
    writeFilledString(stream: any, value: any, length: any): any;
    write(stream: any, type: any, ...args: any[]): any[];
    writeBytes(stream: any, value: any, lengths: any): number;
}
declare class BinaryRepresentation extends ValueRepresentation {
    constructor(type: any);
}
export function paddingLeft(paddingValue: any, string: any): string;
export function tagFromNumbers(group: any, element: any): Tag;
import { Tag } from "./Tag.js";
export {};

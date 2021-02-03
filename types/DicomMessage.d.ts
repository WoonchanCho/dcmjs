export class DicomMessage {
    static read(bufferStream: any, syntax: any, ignoreErrors: any): {};
    static _normalizeSyntax(syntax: any): any;
    static isEncapsulated(syntax: any): boolean;
    static readFile(buffer: any, options?: {
        ignoreErrors: boolean;
    }): DicomDict;
    static writeTagObject(stream: any, tagString: any, vr: any, values: any, syntax: any): void;
    static write(jsonObjects: any, useStream: any, syntax: any, writeOptions: any): number;
    static readTag(stream: any, syntax: any): {
        tag: Tag;
        vr: import("./ValueRepresentation.js").ApplicationEntity | import("./ValueRepresentation.js").AgeString | import("./ValueRepresentation.js").AttributeTag | import("./ValueRepresentation.js").CodeString | import("./ValueRepresentation.js").DateValue | import("./ValueRepresentation.js").DecimalString | import("./ValueRepresentation.js").DateTime | import("./ValueRepresentation.js").FloatingPointSingle | import("./ValueRepresentation.js").FloatingPointDouble | import("./ValueRepresentation.js").IntegerString | import("./ValueRepresentation.js").LongString | import("./ValueRepresentation.js").LongText | import("./ValueRepresentation.js").OtherByteString | import("./ValueRepresentation.js").OtherDoubleString | import("./ValueRepresentation.js").OtherFloatString | import("./ValueRepresentation.js").OtherWordString | import("./ValueRepresentation.js").PersonName | import("./ValueRepresentation.js").ShortString | import("./ValueRepresentation.js").SignedLong | import("./ValueRepresentation.js").SequenceOfItems | import("./ValueRepresentation.js").SignedShort | import("./ValueRepresentation.js").ShortText | import("./ValueRepresentation.js").TimeValue | import("./ValueRepresentation.js").UnlimitedCharacters | import("./ValueRepresentation.js").UniqueIdentifier | import("./ValueRepresentation.js").UnsignedLong | import("./ValueRepresentation.js").UnknownValue | import("./ValueRepresentation.js").UniversalResource | import("./ValueRepresentation.js").UnsignedShort | import("./ValueRepresentation.js").UnlimitedText;
        values: any;
    };
    static lookupTag(tag: any): any;
}
import { DicomDict } from "./DicomDict.js";
import { Tag } from "./Tag.js";

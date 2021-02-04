export class DicomDict {
    constructor(meta: any);
    meta: any;
    dict: {};
    upsertTag(tag: any, vr: any, values: any): void;
    write(writeOptions?: {}): ArrayBuffer;
}

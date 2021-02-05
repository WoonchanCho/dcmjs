/**
 * Class representing Derived Dataset
 */
export default class DerivedDataset {
    static copyDataset(dataset: any): any;
    constructor(datasets: any, options?: {});
    options: any;
    referencedDatasets: any;
    referencedDataset: any;
    dataset: {
        _vrMap: any;
        _meta: any;
    };
    assignToDataset(data: any): void;
    assignFromReference(tags: any): void;
    assignFromOptions(tags: any): void;
    derive(): void;
}

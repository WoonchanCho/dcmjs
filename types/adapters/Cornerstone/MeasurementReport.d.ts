declare class MeasurementReport {
    static generateReport(toolState: any, metadataProvider: any, options: any): StructuredReport;
    static generateToolState(dataset: any): {};
    static registerTool(toolClass: any): void;
}
declare namespace MeasurementReport {
    const MEASUREMENT_BY_TOOLTYPE: {};
    const CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE: {};
    const CORNERSTONE_TOOL_CLASSES_BY_TOOL_TYPE: {};
}
export default MeasurementReport;
import { StructuredReport } from "../../derivations/index.js";

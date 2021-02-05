export default Colors;
/**
 * Class that handles DICOM and CIELAB colors
 * This is based on: https://github.com/michaelonken/dcmtk/blob/3c68f0e882e22e6d9e2a42f836332c0ca21b3e7f/dcmiod/libsrc/cielabutil.cc
 * RGB here refers to sRGB 0-1 per component.
 * dicomlab is CIELAB values as defined in the dicom standard
 * XYZ is CIEXYZ convention
 * TODO: needs a test suite
 * TODO: only dicomlab2RGB tested on real data
*/
export class Colors {
    static d65WhitePointXYZ(): number[];
    static dicomlab2RGB(dicomlab: any): number[];
    static rgb2DICOMLAB(rgb: any): number[];
    static dicomlab2LAB(dicomlab: any): number[];
    static lab2DICOMLAB(lab: any): number[];
    static rgb2LAB(rgb: any): number[];
    static gammaCorrection(n: any): number;
    static invGammaCorrection(n: any): number;
    static rgb2XYZ(rgb: any): number[];
    static xyz2LAB(xyz: any): number[];
    static lab2RGB(lab: any): number[];
    static lab2XYZ(lab: any): number[];
    static xyz2RGB(xyz: any): number[];
    static labf(n: any): number;
    static labfInv(n: any): number;
}

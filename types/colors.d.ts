export default Colors;
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

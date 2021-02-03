export default class Segmentation {
    /**
     * Produces an array of Segments from an input DICOM Segmentation dataset
     *
     * Segments are returned with Geometry values that can be used to create
     * VTK Image Data objects.
     *
     * @example Example usage to create VTK Volume actors from each segment:
     *
     * const actors = [];
     * const segments = generateToolState(dataset);
     * segments.forEach(segment => {
     *   // now make actors using the segment information
     *   const scalarArray = vtk.Common.Core.vtkDataArray.newInstance({
     *        name: "Scalars",
     *        numberOfComponents: 1,
     *        values: segment.pixelData,
     *    });
     *
     *    const imageData = vtk.Common.DataModel.vtkImageData.newInstance();
     *    imageData.getPointData().setScalars(scalarArray);
     *    imageData.setDimensions(geometry.dimensions);
     *    imageData.setSpacing(geometry.spacing);
     *    imageData.setOrigin(geometry.origin);
     *    imageData.setDirection(geometry.direction);
     *
     *    const mapper = vtk.Rendering.Core.vtkVolumeMapper.newInstance();
     *    mapper.setInputData(imageData);
     *    mapper.setSampleDistance(2.);
     *
     *    const actor = vtk.Rendering.Core.vtkVolume.newInstance();
     *    actor.setMapper(mapper);
     *
     *    actors.push(actor);
     * });
     *
     * @param dataset
     * @return {{}}
     */
    static generateSegments(dataset: any): {};
}

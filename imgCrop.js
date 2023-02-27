const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 0,
  viewMode: 0,
  //   options: {
  //     cropBoxResizable: false,
  //     minCropBoxWidth: 408,
  //     minCropBoxHeight: 408,
  //   },
});

document.getElementById('cropImageBtn').addEventListener('click', () => {
  var croppedImage = cropper.getCroppedCanvas().toDataURL('image/png');
  //   alert(croppedImage);
  document.getElementById('output').src = croppedImage;
});

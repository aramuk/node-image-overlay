# Image Overlayer

A node module that utilizes the ImageMagick command line tool to overlay one image on another.

## Usage
[ImageMagick](http://www.imagemagick.org/script/index.php) must be installed for the module to run.

Creating an instance of **image-overlayer**
    ```javascript
    var overlayer = require("image-overlayer");
    ```

## API

### `overlayImage(origImagePath, imageToOverlayPath, newImagePath, overlayX, overlayY, overlayW, overlayH)`
Parameters
* `origImagePath`(`string`) - path to image to serve as base
* `imageToOverlayPath`(`string`) - path to image to be overlayed
* `newImagePath`(`string`) - path where combined image will be stored
* `overlayX`(`number`) - (Optional) x-coordinate on base image where overlayed image will be placed (default = 0)
* `overlayY`(`number`) - (Optional) y-coordinate on base image where overlayed image will be placed (default = 0)
* `overlayW`(`number`) - (Optional) width of overlayed image (default = 0)
* `overlayH`(`number`) - (Optional) height of overlayed image (default = 0)



var fs   = require("fs");
var util = require("util");
var exec = require("child_process").exec;
var tmp = require("tmp");
tmp.setGracefulCleanup();

/*
 * Overlay the image at imageToOverlayPath on the image at origImagePath at
 * co-ordinates overlayX and overlayY, scaling the image to be overlaid as
 * needed to fit in width overlayW and height overlayH. Finally, produce
 * the combined image in the file newImagePath.
 *
 * The function returns a Promise that resolves to the path of the generated
 * image.
 */
function overlayImage(origImagePath, imageToOverlayPath, newImagePath,
        overlayX, overlayY, overlayW, overlayH) {

  checkFileExists(origImagePath);
  checkFileExists(imageToOverlayPath);
  if (overlayW == undefined || overlayH == undefined) {
    overlayW = 0;
    overlayH = 0;
  }
  if (overlayX == undefined || overlayY == undefined) {
    overlayX = 0;
    overlayY = 0;
  }
  var p = new Promise(function(resolve, reject) {
    var script = '';
    const imgResizeCmd = 'convert -density 1200 -background none -resize x%d^ -gravity center -extent %dx%d %s %s\n';
    const combineCmd = 'convert %s %s -geometry +%d+%d -composite %s\n';
    var tmpFile = tmp.fileSync();
    var cmd = '';
    if (overlayW != 0 || overlayH != 0) {
      cmd = util.format(imgResizeCmd, overlayH, overlayW, imageToOverlayPath, tmpFile.name)
    } else {
      cmd = util.format('cp %s %s', imageToOverlayPath, tmpFile.name)
    }
    executeCmd(cmd)
    .then(function(result) {
      cmd = util.format(combineCmd, origImagePath, tmpFile.name, overlayX, overlayY, newImagePath)
      executeCmd(cmd)
    })
    .then(function(result) {
      resolve(newImagePath)
    },
    function(err) {
      reject(err);
    })
  });
  return p;
}

function validateLoad() {
  console.log("Module loaded")
}

function executeCmd(command) {
	var p = new Promise(function(resolve, reject) {
    if (command != '') {
		  exec(command, (err, stdout, stderr) => {
			  if (err) {
				  reject(err);
			  }
		  })
      resolve(command);
    }
	})
	return p;
}

function checkFileExists(filePath) {
  fs.stat(filePath, function (err, fileStats) {
    var fileExists = err && err.code === "ENOENT";
    if (!fileExists && err) {
      throw err;
    }
  })
}

module.exports = {overlayImage, validateLoad};

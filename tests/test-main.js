var assert = require("assert");
var expect = require("chai").expect;
var path   = require("path");
var fs     = require("fs");

var imageOverlay = require('../index.js')

describe('ImageOverlay', function () {

  it("Should load", function() {
    imageOverlay.validateLoad()
    expect(true)
  })

  it("Should overlay image at 0, 0", function() {
    srcImgPath = 'tests/data/tree.jpg'
    ovrImgPath = 'tests/data/holiday.svg'
    outImgPath = 'tests/data/happy.jpg'
    expect(!imageOverlay.checkFileExists(outImgPath))

    return imageOverlay.overlayImage(srcImgPath, ovrImgPath, outImgPath)
    .then(function(data) {
      expect(data === outImgPath)
      expect(imageOverlay.checkFileExists(outImgPath))
      fs.unlink(outImgPath, function(err) {
        if (err) {
          throw err
        }
      })
    })
  })

/*
  it("Should overlay resized image at 10, 10", function() {
    srcImgPath = 'tests/data/tree.jpg'
    ovrImgPath = 'tests/data/holiday.svg'
    outImgPath = 'tests/data/happy.jpg'
    expect(!imageOverlay.checkFileExists(outImgPath))

    return imageOverlay.overlayImage(srcImgPath, ovrImgPath, outImgPath, 10, 10, 30, 60)
    .then(function(data) {
      expect(data === outImgPath)
      expect(imageOverlay.checkFileExists(outImgPath))
      fs.unlink(outImgPath, function(err) {
        if (err) {
          throw err
        }
      })
    })
  })
*/

})

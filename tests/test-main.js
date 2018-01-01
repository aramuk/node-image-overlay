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

  it("Should overlay image", function() {
    srcImgPath = 'tests/data/tree.jpg'
    ovrImgPath = 'tests/data/holiday.svg'
    outImgPath = 'tests/data/happy.jpg'
    expect(!imageOverlay.checkFileExists(outImgPath))

    return imageOverlay.overlayImage(srcImgPath, ovrImgPath, outImgPath)
    .then(function(data) {
      expect(data.equals(outImgPath))
      expect(imageOverlay.checkFileExists(outImgPath))
      fs.unlink(outImgPath, function(err) {
        if (err) {
          throw err
        }
      })
    })
  })
})

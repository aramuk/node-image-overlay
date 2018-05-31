var overlayer = require("..");

var testCases = [

    //Test the basic version of the module, using default values for overlay position and dimensions.
    function testOverlayerSimple( baseImg, imgToOverlay, newImgPath){
        console.log("\nOverlay Parameters\n", baseImg, imgToOverlay, newImgPath);
        overlayer.overlayImage( baseImg, imgToOverlay, newImgPath);
        console.log(imgToOverlay + " overlayed on " + baseImg);
    },

    //Test the positioning of the overlayed image, using default values for its dimensions.
    function testOverlayerPosition( baseImg, imgToOverlay, newImgPath){
        var pos_x = 100;
        var pos_y = 200;
        console.log("\nOverlay Parameters\n", baseImg, imgToOverlay, newImgPath, pos_x, pos_y);
        overlayer.overlayImage( baseImg, imgToOverlay, newImgPath, pos_x, pos_y);
        console.log(imgToOverlay + " overlayed on " + baseImg + ". Positioned at: (" + pos_x + "," + pos_y +").");
    },

    //Test all features of the module
    function testOverlayerAll( baseImg, imgToOverlay, newImgPath){
        var xy = 100;
        console.log("\nOverlay Parameters\n", baseImg, imgToOverlay, newImgPath, xy, xy, xy, xy);
        overlayer.overlayImage( baseImg, imgToOverlay, newImgPath, xy, xy, xy, xy);
        console.log(imgToOverlay + " overlayed on " + baseImg + ". Positioned at: (" + xy + "," + xy +"). " + "Resized to : " + xy + " by " + xy);
    }
];


function runTestCases(){
    var base = "./data/tree.jpg";
    var toOverlay = "./data/holiday.svg";
    var newPath = "";
    var i = 1;

    testCases.forEach(function(testCase){
        newPath = "./data/overlayed"+i+".jpg";
        i++;
        try{
            testCase( base, toOverlay, newPath);
        }
        catch(error){
            console.log("ERROR:",error);
            process.exitCode = 1;
        }
    });
}


console.log("Running all test cases");
runTestCases();

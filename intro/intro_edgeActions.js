/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve
* function signatures and comments starting with 'Edge' to maintain the
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/

// Takes a float and updates the scale of the stage to match it.
var updateStageScale = function(scale){

    var cssRule = "scale(" + scale + ")";

    var stage = document.getElementById('Stage');

    stage.style.webkitTransform = cssRule;
    stage.style.MozTransform = cssRule;
    stage.style.msTransform = cssRule;
    stage.style.OTransform = cssRule;
    stage.style.transform = cssRule;

    return true;

};

// Will poll the parent page for the current dimensions of the canvas
// and work out the new scale for our stage based on this
var getNewScale = function(){

    var sizeData = window.parent.LANDING_SCREEN.getAnimationScale();

    var newScale = sizeData.canvas.onScreenWidth / sizeData.canvas.defaultWidth;

    newScale = parseFloat(newScale.toFixed(4)) + 0.01;

    updateStageScale(newScale);

    return true;

};

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${button_skip}", "click", function(sym, e) {
         // insert code for mouse click here

         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
        window.parent.LANDING_SCREEN.destroyAnimation();

      });
      //Edge binding end


      Symbol.bindElementAction(compId, symbolName, "${button_skip}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_skip}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object

      });


      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37750, function(sym, e) {

    //     sym.stopAll();
         window.parent.LANDING_SCREEN.endAnimation();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
    //     sym.playAll();
         window.parent.LANDING_SCREEN.startAnimation();

      });
      //Edge binding end

      // After 100ms, review the scale of our stage:
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100, getNewScale);

      // Any time our window resizes, update the scale of our stage:
      $(window).bind("resize", function(){

        // Wait 500ms for the browser to catch up
        setTimeout(function(){

          getNewScale();

        }, 500);

      });

      // Any time our device rotates, update the scale of our stage:
      $(window).bind("orientationchange", function(){

        // Wait 500ms for the browser to catch up
        setTimeout(function(){

          getNewScale();

        }, 500);

      });

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2424292530");

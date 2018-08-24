jQuery(document).ready(function ($) {

            var jssor_1_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 0,
              $SlideDuration: 80,
              $SlideWidth: 200,
              $SlideSpacing: 5,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 4
              }
              };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            
            var MAX_WIDTH = 1500;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            
        });
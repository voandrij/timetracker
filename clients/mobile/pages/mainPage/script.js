jQuery(function($){
    
    var demo = {
        init : function(){
            this.carouselControls();
            
            $(window).resize(function(){ demo.carouselControls(); });
        },
        carouselControls : function(){
            var $container = $('#main');
            var $slider = $('#carousel-example-generic');
            var padding = 15;

            var rt = ($(window).width() - ($container.offset().left + $container.outerWidth()));
            $slider.find('.right.carousel-control').css('right', rt + padding).show();            
            $slider.find('.left.carousel-control').css('left', rt + padding).show();
        }
    };
    
    demo.init();
   
});
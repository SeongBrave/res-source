// jQuery extension for dynamic font sizes
// Source: github.com/NathanRutzky/jQuery.fontFlex
// Version: 1.0

(function($) {

    $.fn.fontFlex = function(min, max, mid) {

        var $this = this;

        $(window).resize(function() {

            var size = window.innerWidth / mid;

            if (size < min) size = min;
            if (size > max) size = max;

            $this.css('font-size', size + 'px');

        }).trigger('resize');
    };

})(jQuery);


    $(function(){
		 $('body').fontFlex(8, 28, 38);
  // H1 only
  $('h1').fontFlex(24, 36, 70); 
                    $(".spec_select ul li em").click(function(){
                        $(this).addClass("click").siblings().removeClass("click");
                    })
                })
				$(function(){
	
})
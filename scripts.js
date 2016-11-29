(function($) {

	var nav = $(".nav");

    $("#menu2").on("click", function() {

    	$(this).toggleClass('open');

    	var opened = nav.data("opened");
         
        nav.stop().transition({
            x: opened ? 0 : nav.outerWidth()
        });

        nav.data("opened", opened ? false : true);

    });

})(jQuery);
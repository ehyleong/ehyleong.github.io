$(window).scroll(function(){
    // Detect scroll
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    // Trigger animation
    if(elementScrolled('.scrolled')) {
        var els = $('.scrolled'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('fade-up');
                if(i < els.length) setTimeout(f, 800);
            };
        f();
    }
});
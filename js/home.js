$(document).ready(function(){

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.products-menu li a').on('click', function (e) {
        e.preventDefault();
        //$(document).off("scroll");
        if($(window).width() <= 768 )
        {
            $(this).parents('.products-menu').toggleClass('is-visible');
            //$(this).parents('.top-menu').toggleClass('is-visible');
            $('.mob-menu-button').html($(this).html());
            $('#location-inp').show();
        }
        var target = this.hash;
        $target = $(target);
        console.log($target.offset().top);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 78
        }, 1000, 'swing', function () {
            //window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

    });

});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.products-menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position() && refElement.position().top -78  <= scrollPos && refElement.position().top - 78 + refElement.height() > scrollPos ) {
            $('.products-menu li a').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}

$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['#3b3d63','#e36335' , '#bbb0a5', '#e36335'],
    afterLoad: function(anchorLink, index) {
        var loadedSection = $(this);
        var logo = $('.js_logo');
        //using index
        if (index == 1) {
            // alert('d');
            $('.log-c').css({
                'fill': '#A58242'
            });
            $('.logo-img').attr('src', 'assets/img/logos/Jessups-Logo-2-RGB.svg');
            $('.moveTo1').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.js_nav_list').find('span').removeClass('js_addborder');
            $('.moveTo1').parent().siblings().children().removeClass('js_addborder');
        }
        if (index == 2) {
            $('.log-c').css({
                'fill': '#3b3d63'
            });
            $('.logo-img').attr('src', 'assets/img/logos/Jessups-Logo-1-RGB.svg');

            $('.moveTo2').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.moveTo2').parent().siblings().children().removeClass('js_addborder');
        }
        if (index == 3) {
            $('.log-c').css({
                'fill': '#e36335'
            });
            $('.logo-img').attr('src', 'assets/img/logos/Jessups-Logo-3-RGB.svg');
            $('.moveTo3').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.moveTo3').parent().siblings().children().removeClass('js_addborder');
        }
        if (index == 4) {
            $('.log-c').css({
                'fill': '#bbb0a5'
            });
            $('.logo-img').attr('src', 'assets/img/logos/Jessups-Logo-1-RGB.svg');
            $('.moveTo4').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.moveTo4').parent().siblings().children().removeClass('js_addborder');
        }
    }
});
$(window).on('load resize orientationchange', function() {
    if (window.matchMedia("(max-width: 465px)").matches) {
        $.fn.fullpage.setAutoScrolling(false);
    }else {
        $.fn.fullpage.setAutoScrolling(true);
    }
});

//adding the action to the button
$(document).on('click', '.moveTo1', function(){
    $.fn.fullpage.moveTo('page1', 1);
});
$(document).on('click', '.moveTo2, .js_service', function(){
    $.fn.fullpage.moveTo('page2', 1);
});
$(document).on('click', '.moveTo3', function(){
    $.fn.fullpage.moveTo('page3', 1);
});
$(document).on('click', '.moveTo4', function(){
    $.fn.fullpage.moveTo('page4', 1);
});

var arrowLeft = "<div class='slick-arrow arrow-left'><img class='slick-arrow arrow-left svg-inline' src='assets/img/arrow-left.svg' width='25'></div>",
    arrowRight = "<div class='slick-arrow arrow-right'><img class='slick-arrow arrow-right svg-inline' src='assets/img/arrow-right.svg' width='25'></div>";
$(window).on('load resize orientationchange', function() {
    if (window.matchMedia("(max-width: 991px)").matches) {
        $('.slick').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: arrowLeft,
            nextArrow: arrowRight,

        });
    } else{
        if ($('.slick').hasClass('slick-initialized')) {
            $('.slick').slick('unslick');
        }
    }
});

$('.w_slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: arrowLeft,
    nextArrow: arrowRight,

});
$('.desktop-only').find('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.w_slick').slick('slickGoTo', slideno - 1);
});
$('.w_slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // then let's do this before changing slides

    console.log('before change');
})
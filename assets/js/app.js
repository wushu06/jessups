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
            $('.moveTo1').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.js_nav_list').find('span').removeClass('js_addborder');
            $('.moveTo1').parent().siblings().children().removeClass('js_addborder');
        }
        if (index == 2) {
            $('.log-c').css({
                'fill': '#3b3d63'
            });


            $('.moveTo2').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.moveTo2').parent().siblings().children().removeClass('js_addborder');
        }
        if (index == 3) {
            $('.log-c').css({
                'fill': '#e36335'
            });
            $('.moveTo3').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.moveTo3').parent().siblings().children().removeClass('js_addborder');
        }
        if (index == 4) {
            $('.log-c').css({
                'fill': '#bbb0a5'
            });
            $('.moveTo4').addClass('js_addborder').siblings().removeClass('js_addborder');
            $('.moveTo4').parent().siblings().children().removeClass('js_addborder');
        }
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
$('.slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: arrowLeft,
    nextArrow: arrowRight,
    responsive: [

        {
            breakpoint: 781,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
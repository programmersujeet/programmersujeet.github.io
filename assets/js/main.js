$(function(){

    /*-------------------------------------------------------------------*/
    /*  1. Preloader. Requires jQuery jpreloader plugin.
    /*-------------------------------------------------------------------*/
    $(document).ready(function() {
        $('body').jpreLoader({
            showPercentage: false,
            loaderVPos: '50%'
        });
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  2. Makes the height of all selected elements (".match-height")
    /*  exactly equal. Requires jQuery matchHeight plugin.
    /*-------------------------------------------------------------------*/
    $(window).smartload(function(){
        $('.match-height').matchHeight();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  3. Page scrolling feature, requires jQuery Easing plugin.
    /*-------------------------------------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e){
            e.preventDefault();

            var $anchor = $(this);
            var offset = $('body').attr('data-offset');

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
        });
    };
    
    pageScroll();
    
    
    /*-------------------------------------------------------------------*/
    /*  4. Make navigation menu on your page always stay visible.
    /*  Requires jQuery Sticky plugin.
    /*-------------------------------------------------------------------*/
    var stickyMenu = function(){
        var nav = $('.navbar.navbar-fixed-top');
        nav.unstick();
        nav.sticky({topSpacing: 0});
    };
    
    stickyMenu();
    
    // Call pageScroll() and stickyMenu() when window is resized.
    $(window).smartresize(function(){
        pageScroll();
        stickyMenu();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  5. Portfolio gallery. Requires jQuery Magnific Popup plugin.
    /*-------------------------------------------------------------------*/
    $('.portfolio').magnificPopup({
        delegate: 'a.zoom',
        type: 'image',
        fixedContentPos: false,
        
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        
        // Class that is added to popup wrapper and background
        mainClass: 'mfp-fade',
        
        gallery: {
            enabled: true,
            preload: [0,2],
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            tPrev: 'Previous Project',
            tNext: 'Next Project'
        }
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  6. Column Chart (Section - My Strenghts)
    /*-------------------------------------------------------------------*/
    var columnChart = function (){
        $('.column-chart > .chart > .item > .bar > .item-progress').each(function(){
            var item = $(this);
            var newHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                $('.column-chart').one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            height: newHeight
                        },1500);
                    }
                });
            }
            else{
                item.css('height', newHeight);
            }
        });
    };
    
    // Call columnChart() when window is loaded.
    $(window).smartload(function(){
        columnChart();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  7. Section - My Resume
    /*-------------------------------------------------------------------*/
    var resumeCollapse = function (){
        var workItem = $('#work .collapse:not(:first)');
        var educationItem = $('#education .collapse:not(:first)');
        var ww = Math.max($(window).width(), window.innerWidth);

        if (ww < 768){
            workItem.collapse('show');
            educationItem.collapse('show');
        }
        else{
            workItem.collapse('hide');
            educationItem.collapse('hide');
        }
    };
    
    // Call resumeCollapse() when window is loaded.
    $(window).smartload(function(){
        resumeCollapse();
    });
    
    // Call resumeCollapse() when window is resized.
    $(window).smartresize(function(){
        resumeCollapse();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*	8. References slider. Requires Flexslider plugin.
    /*-------------------------------------------------------------------*/
    $(window).smartload(function(){
        var flex = $('.flexslider.references');
    
        flex.flexslider({
            selector: ".slides > .item",
            manualControls: ".flex-control-nav li",
            directionNav : false,
            slideshowSpeed: 4000,
            after: function(slider){
                if (!slider.playing) {
                    slider.play();
                }
            }
        }); 
    });
    
    $('a.flex-prev').on('click', function(e){
        e.preventDefault();
        $('.flexslider').flexslider('prev');
    });
    
    $('a.flex-next').on('click', function(e){
        e.preventDefault();
        $('.flexslider').flexslider('next');
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  9. Circle Chart (Section - Skills & Expertise)
    /*-------------------------------------------------------------------*/
    var circleChart = function (){
        $('.circle-chart .item > .circle > .item-progress').each(function(){
            var item = $(this);
            var maxHeight = 108;
            var newHeight = maxHeight * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            height: newHeight
                        },1500);
                    }
                });
            }
            else{
                item.css('height', newHeight);
            }
        });
    };
    
    // Call circleChart() when window is loaded.
    $(window).smartload(function(){
        circleChart();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  10. Bar Chart (Section - Knowledge)
    /*-------------------------------------------------------------------*/
    var barChart = function (){
        $('.bar-chart > .item > .bar > .item-progress').each(function(){
            var item = $(this);
            var percent = $(this).prev();
            var newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            width: newWidth
                        },1500);
                        
                        percent.animate({
                            left: newWidth - percent.width()
                        },1500);
                    }
                });
            }
            else{
                item.css('width', newWidth);
                percent.css('left', newWidth - percent.width());
            }
        });
    };
    
    // Call barChart() when window is loaded.
    $(window).smartload(function(){
        barChart();
    });
    
    // Call barChart() when window is resized.
    $(window).smartresize(function(){
        barChart();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  11. Milestones counter.
    /*-------------------------------------------------------------------*/
    var counter = function (){
        var number = $('.milestones .number');
        
        number.countTo({
            speed: 3000
        });
    };
    
    if (jQuery.browser.mobile === false){
        var number = $('.milestones .number');
        
        number.one('inview', function(isInView) {
            if (isInView){
                counter();
            }
        });
    }
    else{
        counter();
    }
});
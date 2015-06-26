$(function(){
    
    // Only animate elements when using non-mobile devices
    if (jQuery.browser.mobile === false){
        
        /*-------------------------------------------------------------------*/
        /*  1. Section - Profile
        /*-------------------------------------------------------------------*/
        $('#profile .profile-text p:not(:first)').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInUp').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  2. Section - Portfolio
        /*-------------------------------------------------------------------*/
        $('#portfolio .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  3. Section - Services
        /*-------------------------------------------------------------------*/
        $('#services .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('#services .services .item > .inner-content h4').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  4. Section - Strenghts
        /*-------------------------------------------------------------------*/
        $('#strenghts .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('#strenghts .legend.legend-left > .legend-title').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('#strenghts .legend.legend-right > .item').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 3));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  5. Section - Resume
        /*-------------------------------------------------------------------*/
        $('#resume .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('#education .resume-item:not(:first)').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
        
        $('#work .resume-item:not(:first)').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  6. Section - References
        /*-------------------------------------------------------------------*/
        $('#references .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  7. Section - Skills
        /*-------------------------------------------------------------------*/
        $('#skills .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  8. Section - Knowledge
        /*-------------------------------------------------------------------*/
        $('#knowledge .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  9. Section - Accolades
        /*-------------------------------------------------------------------*/
        $('#accolades .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('.accolades .item:not(:first)').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  10. Section - Milestones
        /*-------------------------------------------------------------------*/
        $('#milestones .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  11. Section - Work Process
        /*-------------------------------------------------------------------*/
        $('#work-process .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('.work-process .item > .inner-content > .title').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 5));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  12. Section - Contact
        /*-------------------------------------------------------------------*/
        $('#contact .section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });
        
        $('#contact .contact-details').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated flipInX').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  13. Footer
        /*-------------------------------------------------------------------
        $('.footer .social-icons .item').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });*/
    }
});
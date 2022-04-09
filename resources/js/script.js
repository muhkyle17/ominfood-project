$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 2000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 2000);
    });

    /* Navigation scroll */ 
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
                return false;
            } else {
                $target.attr('tabindex','-1'); 
                $target.focus();
            };
            });
        }
        }
    });

    /* Animations on scroll */
    /*
    $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animate_animated', 'animate__fadeIn');
        },
        {
            offset: '50%',
        }
    }) */

    $('.js--wp-1').waypoint( 
        (direction) => {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );

    $('.js--wp-2').waypoint( 
        (direction) => {
          $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        {
          offset: '50%',
        }
      );
      
    $('.js--wp-3').waypoint( 
        (direction) => {
          $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );

    $('.js--wp-4').waypoint( 
        (direction) => {
          $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
        {
          offset: '50%',
        }
      );

    /* Resets the animations when you scroll all the way up to the header */
    $('.js--header').waypoint(
        (direction) => {
          if (direction === 'up') {
            $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-2').removeClass('animate__animated animate__fadeInUp');
            $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-4').removeClass('animate__animated animate__pulse');
          }
        },
        {
          offset: '-25%',
        }
      );

    /* Mobile Navigation */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('js--nav-icon ion-icon');

        nav.slideToggle(200);

        if (icon.hasClass('menu-outline')) {
            icon.addClass ('close-outline');
            icon.removeClass ('menu-outline');
        } else {
            icon.addClass('menu-outline');
            icon.removeClass('close-outline');
        }

    });

});
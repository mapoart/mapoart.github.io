"use strict";

var customFunc = function () {

    var menuToggle = function () {
        $('.menu_toggle').click(function () {
            if ($(this).hasClass('act')) {
                $(this).removeClass('act');
                $('.mobile_menu').slideUp();
                $('.mobile_menu li.sub ul').slideUp();
                $('.mobile_menu li.sub').removeClass('act');
            } else {
                $(this).addClass('act');
                $('.mobile_menu').slideDown();
            }
        });

        $('.mobile_menu li.sub').click(function () {
            if ($(this).hasClass('act')) {
                $(this).removeClass('act');
                $('.mobile_menu li.sub ul').slideUp();
            } else {
                $(this).addClass('act');
                $('.mobile_menu li.sub ul').slideDown();
            }
        });
    }

    /* smooth scroll to anchors */
    var smoothScroll = function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    };

    /* popup */
    var popup = function () {
        $('._btn_pop_open').click(function () {
            var name = $(this).data('name');
            $('.pop[data-name=' + name + ']').fadeIn();
            $('body').css('overflow', 'hidden');
        });
        $('.pop__close').click(function () {
            $('body').css('overflow', 'visible');
            $('.pop').fadeOut();
            if ($(this).parents().hasClass('pop_video')) {
                $('.pop_video iframe').attr('src', '');
                var videoSrc = $('.pop_video').data('videosrc');
                if (typeof videoSrc === 'undefined' || videoSrc == '') {
                    return false;
                }
                $('.pop_video iframe').attr('src', videoSrc);
            }
        });
    }

    /* remove placeholder */
    var removePlaceholder = function () {
        $('input,textarea').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
        }).blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /* form validation */
    var formValidation = function () {
        $('.contact_form .form').on('submit', function (event) {
            event.preventDefault();


            if ($('.contact_form .input_name').val() < 1) {
                $('.contact_form .input_name').addClass('error');
            } else {
                $('.contact_form .input_name').removeClass('error');
            }

            var email = $('.contact_form .input_email').val();

            if (email.length < 1 || !validateEmail(email)) {
                $('.contact_form .input_email').addClass('error');
            } else {
                $('.contact_form .input_email').removeClass('error');
            }


            if ($('.contact_form textarea').val() < 1) {
                $('.contact_form textarea').addClass('error');
            } else {
                $('.contact_form textarea').removeClass('error');
            }

            if ($('.contact_form input[type="text"]').hasClass('error') || $('.contact_form textarea').hasClass('error')) {
                return false;
            }

//            $('body').css('overflow', 'hidden');
//            $('.pop_form_confirm').fadeIn();

//            setTimeout(function () {
//                $('body').css('overflow', 'visible');
//                $('.pop_form_confirm').fadeOut();
//            }, 3000);

            this.submit();
        });
        
        //Newsletter form
        $('.footer .form').on('submit', function (event) {
            event.preventDefault();

            var email = $('.footer .input_email').val();

            if (email.length < 1 || !validateEmail(email)) {
                $('.footer .input_email').addClass('error');
            } else {
                $('.footer .input_email').removeClass('error');
            }

            if ($('.footer .input_email').hasClass('error')) {
                return false;
            }

//            $('body').css('overflow', 'hidden');
//            $('.pop_form_confirm').fadeIn();
//
//            setTimeout(function () {
//                $('body').css('overflow', 'visible');
//                $('.pop_form_confirm').fadeOut();
//            }, 3000);
            this.submit();
        });

        $('.pop_callback .form').on('submit', function (event) {
            event.preventDefault();

            if ($('.pop_callback .input_name').val() < 1) {
                $('.pop_callback .input_name').addClass('error');
            } else {
                $('.pop_callback .input_name').removeClass('error');
            }

            var phone = $('.pop_callback .input_phone').val();

            if (phone.length < 1 || isNaN(phone) === true) {
                $('.pop_callback .input_phone').addClass('error');
            } else {
                $('.pop_callback .input_phone').removeClass('error');
            }

            if ($('.pop_callback .form input').hasClass('error')) {
                return false;
            }

            $('.pop').hide();
            $('.pop_form_confirm').fadeIn();

            setTimeout(function () {
                $('body').css('overflow', 'visible');
                $('.pop_form_confirm').fadeOut();
            }, 3000);
        });
    }

    /* back to top */
    var backToTopClick = function () {
        $('.back_to_top').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }

    var backToTopScroll = function () {
        if ($('.back_to_top').length > 0) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 200) {
                $('.back_to_top').show();
            } else {
                $('.back_to_top').fadeOut();
            }
        }
    }

    $(document).ready(function () {
        new WOW().init();
        backToTopClick();
        backToTopScroll();
        formValidation();
        removePlaceholder();
        popup();
        menuToggle();
        smoothScroll();
    });

    $(window).scroll(function () {
        backToTopScroll();
    });

    $(window).load(function () {
        $(".owl_clients").owlCarousel({
            'items': 3,
            'nav': true,
            'navText': ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816C52.942,116.507,52.942,124.327,57.633,129.007z"/><g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"/><g></svg>'],
            'responsive': {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1150: {
                    items: 5
                }
            }
        });
    });
}

customFunc();
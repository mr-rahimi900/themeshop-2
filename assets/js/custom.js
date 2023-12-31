﻿(function ($) {
    'use strict';

    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    $('.nav-item').click(function(){
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(500);
    })

    // Header Sticky
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.header').addClass("is-sticky");
        }
        else {
            $('.header').removeClass("is-sticky");
        }
    });

    // tooltip
    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip()
    });

  /* Shop page grid */
  $(".grid-option li").on("click",function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  $(".grid-option .list-btn").on("click",function(){
    $(".product-list-section").addClass('list-style');
  });
  $(".grid-btn").on("click",function(){
    $(".product-list-section").removeClass('list-style').addClass('row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2');
  })
  $(".three-grid").on("click",function(){
    $(".product-list-section").removeClass('row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style').addClass('row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2');
  })

    // Others Option For Responsive JS
    $(".side-nav-responsive .dot-menu").on("click", function () {
        $(".side-nav-responsive .container-max .container").toggleClass("active");
    });

    // Metis Menu JS
    $(function () {
        $('#sidemenu-nav').metisMenu();
    });

    // Favorite JS
    $('.chat-list-header .header-right .favorite').on('click', function () {
        $(this).toggleClass('active');
    });

    // Burger Menu JS
    $('.burger-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.main-content').toggleClass('hide-sidemenu-area');
        $('.sidemenu-area').toggleClass('toggle-sidemenu-area');
        $('.top-navbar').toggleClass('toggle-navbar-area');
    });
    $('.responsive-burger-menu').on('click', function () {
        $('.responsive-burger-menu').toggleClass('active');
        $('.sidemenu-area').toggleClass('active-sidemenu-area');
    });

    // FAQ Accordion JS
    $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // Recent Job Slider
    $('.recent-job-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: false,
        rtl: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    })

    // Company Slider
    $('.company-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: false,
        dots: true,
        rtl: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    })

    // Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: false,
        rtl: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    // Testimonials Widget Slider
    $('.testimonials-widget-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: false,
        items: 1,
        rtl: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    // Owl slider scroll product
    $('.owl-slider-scroll-product').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    })


    // Owl slider special offer
    $('.special-offer').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        rtl: true,
        dots: false,
        autoplay: true,
        navSpeed: 1200,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    // Odometer JS
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Popup Video 
    $('.play-btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Job Listing Accordion JS
    $('.accordion-widget').find('.accordion-widget-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-widget-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-widget-title').not($(this)).removeClass('active');
    });

    // Range Slider
    if ($('.range-slider-area').length) {
        $(".range-slider-area .range-slider").slider({
            range: true,
            min: 1900,
            max: 2030,
            values: [1923, 2023],
            slide: function (event, ui) {
                $(".range-slider-area .count").text(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $(".range-slider-area .count").text($(".range-slider").slider("values", 0) + " - " + $(".range-slider").slider("values", 1));
    }

    // Range Slider
    if ($('.area-range-slider').length) {
        $(".area-range-slider").slider({
            range: true,
            min: 0,
            max: 100,
            values: [0, 50],
            slide: function (event, ui) {
                $(".area-amount").text(ui.values[1]);
            }
        });

        $(".area-amount").text($(".area-range-slider").slider("values", 1));
    }


    // Count Time JS
    function makeTimer() {
        var endTime = new Date("October 30, 2021 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>روز</span>");
        $("#hours").html(hours + "<span>ساعت</span>");
        $("#minutes").html(minutes + "<span>دقیقه</span>");
        $("#seconds").html(seconds + "<span>ثانیه</span>");
    }
    setInterval(function () { makeTimer(); }, 300);

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "لطفا ایمیل خود را به درستی وارد کنید");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "با تشکر از شما برای اشتراک!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Back To Top
    $('body').append("<div class='go-top'><i class='ri-arrow-up-s-line'></i></div>");
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function () {
        $('html, body').animate({
            scrollTop: '0',
        }, 500);
    });

    //WOW JS
    new WOW().init();

    // Preloader JS
    $(window).on('load', function () {
        $(".preloader").fadeOut(500);
    });

})($);
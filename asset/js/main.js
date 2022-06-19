// Partner list
$(".partner-main__list").owlCarousel({
    loop: true,
    margin: 66,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
        },
        1000: {
            items: 7,
        },
    },
});

// feature list, new list
$(".list-product").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            autoWidth: true,

        },
        1000: {
            items: 4,
        },
    },
});

// best list 
$(".best-main__list").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3,
            margin: 17,
        },
        1000: {
            items: 3,
        },
    },
});


// our list 
$(".our-list").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
            autoWidth:true,
            margin: 10,
        },
        1000: {
            items: 4,
        },
    },
});

$(".share-list").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
        },
        1000: {
            items: 5,
        },
    },
});


//tablet banner
  $(".banner-list__images").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
         0: {
              items: 1,
         },
         600: {
              items: 1,
         },
         1000: {
              items: 1,
         },
    },
});

// tablet panel 
$(document).ready(function() {
    $('.featured-nav a').click(function() {
        $('.featured-main__list').hide();
        $('.featured-nav a.active').removeClass('active');
        $(this).addClass('active');

        let featured = $(this).attr('href');
        $(featured).fadeIn(1000);

        return false;
    });

    $('.featured-nav li:first a').click();


    // reponsive
    let width = $(window).width();

    if(width <= 768) {
        $('#menu-search').appendTo($('.header-main'));
    }


    if(width <= 768) {
        $('.auth-language').hide();
        // $('.menu-list li:first a').appendTo($('.header-main'));
        $('.guide-main__left').appendTo($('.title '));
        $('.about-main__right').appendTo($('.about-main__left .title'));
    }
})


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
            items: 3,
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
            items: 1
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

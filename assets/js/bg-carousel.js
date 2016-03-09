$(function() {
    
    /*-------------------------------------------------------------------*/
    /*  Background Carousel. Requires Owl Carousel Plugin.
    /*-------------------------------------------------------------------*/
    $('.owl-bg-carousel').owlCarousel({
        //autoPlay: true, // if autoPlay is set to true, default slideSpeed is automatically set to 5 seconds
        //autoPlayInterval: 10000,
        //autoPlayTimeout: 10000,
        //autoPlayHoverPause:false,
        //slideSpeed: 1000,
        autoPlay: 10000,
        paginationSpeed: 1000,
        singleItem: true,
        navigation : true,
        navigationText: ["<i class='icon-Arrow-OutLeft'></i>", "<i class='icon-Arrow-OutRight'></i>"]
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

$('.item-img').hover(
    function(){
        this.animate({
            'background-size':'550px',
            'filter':'blur(1px)'
        },4000)
    }
)
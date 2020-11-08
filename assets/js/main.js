//AOS-settings

ScrollOut({
   targets: '.aos',
   //once: true,
   onShown: function(el) {
      if (!el.src) {
         el.src = el.dataset.src;
      }
   }
})


// owl-carousel-homepage-header-part

$(document).ready(function() {
$('.car-content2 .owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3500,
    //autoplayHoverPause:true,
  animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
dots: true,
    //margin: 10,
    nav: false,
items: 1

});

});



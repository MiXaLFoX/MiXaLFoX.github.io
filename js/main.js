$(document).ready(function(){
  var show = true;
  var countbox = "#counts";
  $(window).on("scroll load resize", function(){

    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;

    var w_height = $(window).height();
    var d_height = $(document).height();

    var e_height = $(countbox).outerHeight();

    if(w_top + 750 >= e_top || w_height + w_top === d_height || e_height + e_top < w_height){
      $('#counts').css('opacity', '1');
      $(".spincrement").spincrement({
          from: 0,
          to: false,
          thousandSeparator: " ",
          duration: 1800
      });

      show = false;
    }
  });
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:3000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
});





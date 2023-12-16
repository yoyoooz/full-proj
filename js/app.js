




$(document).ready(function () {
  //Owl

  

  $('.hero-slider').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,
      navText: ['PREV', 'NEXT'],
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 8000,
      responsive: {
          0: {
              nav: false,
          },
          768: {
              nav: true,
          }
      }
  })

  $('#projects-slider').owlCarousel({
      loop: true,
      nav: false,
      items: 2,
      dots: true,
      smartSpeed: 600,
      center: true,
      autoplay:true,
      autoplayTimeout: 7000,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2,
              margin: 8,
          }
      }
  })

  

  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  if ($('.owl-testimonials').length) {
      $('.owl-testimonials').owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          items: 1,
          margin: 30,
          autoplay: false,
          smartSpeed: 700,
          autoplayTimeout: 6000,
          responsive: {
              0: {
                  items: 1,
                  margin: 0
              },
              460: {
                  items: 1,
                  margin: 0
              },
              576: {
                  items: 2,
                  margin: 20
              },
              992: {
                  items: 2,
                  margin: 30
              }
          }
      });
  }
  if ($('.owl-partners').length) {
      $('.owl-partners').owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          items: 1,
          margin: 30,
          autoplay: false,
          smartSpeed: 700,
          autoplayTimeout: 6000,
          responsive: {
              0: {
                  items: 1,
                  margin: 0
              },
              460: {
                  items: 1,
                  margin: 0
              },
              576: {
                  items: 2,
                  margin: 20
              },
              992: {
                  items: 4,
                  margin: 30
              }
          }
      });
  }



  

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
     }
    }).on("dragged.owl.carousel", function (event) {
    console.log('event : ',event.relatedTarget['_drag']['direction'])
    });


if ($('.owl-testimonials').length) {
    $('.owl-testimonials').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            460: {
                items: 1,
                margin: 0
            },
            576: {
                items: 2,
                margin: 20
            },
            992: {
                items: 2,
                margin: 30
            }
        }
    })
    }
    
    $(window).scroll(function(){

        if(visible($('.count-digit')))
          {
            if($('.count-digit').hasClass('counter-loaded')) return;
            $('.count-digit').addClass('counter-loaded');
            
      $('.count-digit').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
      }
    })
    
    
      
});
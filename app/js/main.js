$(function(){
    $(".menu a").on("click",function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
      $(".up").on("click",function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    
      
    $('.developments-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    $('.team-slider').slick({
      slidesToShow: 4, 
      slidesToScroll: 4,
      dots:true,
      arrows:false,
      responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow:3,
            slidesToScroll:3
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow:2,
            slidesToScroll:2
          }
        },
        {
          breakpoint: 410,
          settings: {
            slidesToShow:1,
            slidesToScroll:1
          }
        }
      ]
    });
      $('.menu__btn, .menu a').on('click',function(){
        $('.menu').toggleClass('menu--active');
      });
    
        var mixer = mixitup('.portfolio__photos');
    });
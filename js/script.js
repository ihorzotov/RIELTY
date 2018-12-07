$(document).ready(function () {
  $(document).on("click"," .header-content__item a" , function (event) {
    event.preventDefault();
    
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 105;
      
        $('body,html').animate({scrollTop: top}, 500);
  });

  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    if(winTop >= 1){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });

  $('.main-seventh__form .standart-btn').click(function(){
    $('.thx-block').addClass('active');
    setTimeout(function(){
      $('.thx-block').removeClass('active');
    }, 3000);
  });

function MediaJs(){
  if ($(window).width() > 1170) {
    function NumCounter() {
      $('.main-sixth__card').each(function(key,item){
        var numbStart = parseInt($(item).attr('data-num'));
        $({numberValue: 0}).animate({numberValue: numbStart}, {
          duration: 1000,
          easing: "linear",
          
          step: function(val) {
            // $(item).find('.num').html(Math.ceil(val));
            $(item).find('.num').html(val.toFixed(0));
          }
        });
      });
    };

    jQuery(function($) {
      var doAnimations = function() {
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animation'),
            jsCounter = $('.main-sixth__card.js-counter');

        jsCounter.each(function(i) {
          var $animatable = $(this);
          if (($animatable.offset().top + $animatable.height() - 300) < offset) {
            jsCounter.removeClass('js-counter');
            NumCounter();
          }
        });
        $animatables.each(function(i) {
          var $animatable = $(this);
          console.log($animatable.offset().top + $animatable.height(),offset);
          if (($animatable.offset().top + $animatable.height() - 300) < offset) {
            $animatable.removeClass('animation');
          }
        });
        
      };

      $(window).on('scroll', doAnimations);
      $(window).trigger('scroll');

    });
  }else{
    $('.js-counter,.animation').removeClass('js-counter, animation');
    $('.main-sixth__card').each(function(key,item){
      var numb = $(item).attr('data-num');
      $(item).find('.num').html(numb);
    })
  }
}
MediaJs();
$(window).resize(function(){
  MediaJs();
});
});
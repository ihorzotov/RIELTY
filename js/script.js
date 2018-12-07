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
  
jQuery(function($) {
  var doAnimations = function() {
    
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animation');
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
      var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 300) < offset) {
        $animatable.removeClass('animation');
      }
    });
  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
});
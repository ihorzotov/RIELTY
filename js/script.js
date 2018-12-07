$(document).ready(function () {
  $(document).on("click"," .header-content__item a" , function (event) {
    event.preventDefault();
    
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 5;
      
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
})
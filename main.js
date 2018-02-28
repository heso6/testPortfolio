var scrollp=0;
(function ($) {
  $(document).ready(function(){
    $(function () {
      $(window).scroll(function () {
                // ask about the position of scroll 

                if ($(this).scrollTop() < scrollp) {
                  $('.navbar-fixed-top').fadeIn();
                  scrollp= $(this).scrollTop();
                } else {
                  $('.navbar-fixed-top').fadeOut();
                  scrollp= $(this).scrollTop();
                }
              });
    });

  });
}(jQuery));

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

jQuery(document).ready(function(){
  jQuery('.bar').each(function(){
    jQuery(this).find('.bar-inner').animate({
      width:jQuery(this).attr('data-width')
    },3000);
  });
});
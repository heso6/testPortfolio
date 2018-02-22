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


// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 52.1787455, lng: 21.003591599999936},
//     zoom: 17,
//     mapTypeId: 'satellite'
//   });
//   map.setTilt(45);
//     var marker = new google.maps.Marker({
//          animation: google.maps.Animation.BOUNCE,
//           position: {lat: 52.1787455, lng: 21.003591599999936},
//           map: map,
//            title: 'Hello World!'

//         });
//       }
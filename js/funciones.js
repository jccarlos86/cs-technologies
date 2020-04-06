$(document).ready(function(){
      $('#volverinicio').hide();

      $("#menunosotros").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#nosotros").offset().top
        }, 2000);
      });

      $("#menuservicios").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#servicios").offset().top
        }, 2000);
      });

      $("#volverinicio").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#inicio").offset().top
        }, 2000);
      });


      // ocultar boton ir al inicio
      var didScroll;
      var lastScrollTop = 0;
      var navbarHeight = $('header').outerHeight();

      $(window).scroll(function(event){
          didScroll = true;
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 100);

      function hasScrolled() {
          var st = $(this).scrollTop();
          if (st > lastScrollTop || lastScrollTop > 50){
            $('#volverinicio').show();
          }     else {
            $('#volverinicio').hide();
          }
          lastScrollTop = st;
      }
});
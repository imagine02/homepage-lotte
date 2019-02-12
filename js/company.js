
   $(function () {
       $(window).scroll(function (){
          if ($(this).scrollTop() > 500) {
             $('#fixed_top').fadeIn();
          } else {
             $('#fixed_top').fadeOut();
          }
       });

       $("#fixed_top").click(function (){
          $('html, body').animate({
             scrollTop: 0
          }, 400);
          return false;
         });
      });
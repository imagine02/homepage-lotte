
    $(function () {
      

      $("#navmenu li:nth-child(1)").click(function () {
         $(".branch1").show(), $(".branch2, .branch3, .branch4, .branch5").hide(),
            $("#navmenu li a").css({
               "color":"#333",
               
            }),   
            $("#navmenu li:nth-child(1) a").css({
               "color": "#897d71",
               "box-shadow": "none",
               
            });
      })

      $("#navmenu li:nth-child(2)").click(function () {
         $(".branch2").show(), $(".branch1, .branch3, .branch4, .branch5").hide(),
            $("#navmenu li a").css({
               "color":"#333",
               
            }),
            $("#navmenu li:nth-child(2) a").css({
               "color": "#897d71",
               "box-shadow": "none",
               
            });
      })

      $("#navmenu li:nth-child(3)").click(function () {
         $(".branch3").show(), $(".branch2, .branch1, .branch4,.branch5").hide(),
            
            $("#navmenu li a").css({
               "color":"#333",
               
            }),
            $("#navmenu li:nth-child(3) a").css({
               "color": "#897d71",
               "box-shadow": "none",
               
            });
      })

      $("#navmenu li:nth-child(4)").click(function () {
         $(".branch4").show(), $(".branch2, .branch3, .branch1,.branch5").hide(),
         $("#navmenu li a").css({
            "color":"#333",
            
         }),
         $("#navmenu li:nth-child(4) a").css({
            "color": "#897d71",
            "box-shadow": "none",
            
         });
      })

      $("#navmenu li:nth-child(5)").click(function () {
         $(".branch5").show(), $(".branch2, .branch3, .branch1, .branch4").hide(),
            
         $("#navmenu li a").css({
            "color":"#333",
            
         }),
         $("#navmenu li:nth-child(5) a").css({
            "color": "#897d71",
            "box-shadow": "none",
            
         });
      });

      $(window).scroll(function() {
         if ($(this).scrollTop() > 500) {
             $('#fixed_top').fadeIn();
         } else {
             $('#fixed_top').fadeOut();
         }
     });
     
     $("#fixed_top").click(function() {
         $('html, body').animate({
             scrollTop : 0
         }, 400);
         return false;
     });



      
   });

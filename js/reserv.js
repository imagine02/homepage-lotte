// script.js
$(function(){

    // 2단계 메뉴 닫기
    $('.korea2').hide();
  
    // 2단계 메뉴 hover
    $('.korea1 > li').hover(
      // 마우스 올라갔을때
      function(){
        // 현재 선택한 목록만 열리는 거
        $(this).find('.korea2').stop().slideDown();
        
        // 다 열리게
        // $('.korea2').stop().slideDown();
      },
      // 마우스 나갔을때
      function(){
        $('.korea2').stop().slideUp();
      }
    );
  
    // bx slider
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: false,
      stopAutoOnClick: true,
      pager: false,
      // slideWidth: 600
      controls: false
    });

    //btn
    var adult_num = 1;
    $('.miner1').on("click" , function(){
      adult_num--;
      $('.adult_num span').text(adult_num)
    })
    $('.plus1').on("click" , function(){
      adult_num++;
      $('.adult_num span').text(adult_num)
    })
    var kids_num = 0;
    $('.miner2').on("click" , function(){
      kids_num--;
      $('.kids_num span').text(kids_num)
    })
    $('.plus2').on("click" , function(){
      kids_num++;
      $('.kids_num span').text(kids_num)
    })
  });

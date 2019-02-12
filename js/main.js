// @import url('jquery.prettydropdown.js');
// http://html5around.com/wordpress/tutorials/jquery-dropdown-plugin/
$(function () {

   // 2단계 메뉴 닫기
   // $('.depth2').hide();

   // 2단계 메뉴 hover
   $('.depth1 > li').hover(
      // 마우스 올라갔을때
      function () {
         // 전체 메뉴 열림
         // $('.depth2').stop().slideDown()
         // 현재 선택한 목록만 열림
         $('.depth2').css({
            height: '0px'
         });
         $(this).find('.depth2').stop().animate({
            height: '100px'
         });
      },
      // 마우스 나갔을때
      function () {
         $(this).find('.depth2').stop().animate({
            height: '0px'
         });

      }
   );
})

$(function () {
      $('.main-visual').bxSlider({
         auto: true, // 자동재생
         pager: true, // 하단위치 이동버튼
         autoHover: true, // 마우스 올라가면 정지
         controls: true, // 이전, 다음 버튼표시
         captions:true
      });

   var scrollY = 0;
   $(window).on('scroll', function(){
      scrollY = $(this).scrollTop()
      console.log(scrollY);
      if(scrollY > 200 && scrollY < 4000){
         $('#reservation-banner').addClass('fixed')
      }
      else(
         $('#reservation-banner').removeClass('fixed')
      )
   })


}); 

/* Demo purposes only */
$(".hover").mouseleave(
   function () {
     $('.snip1').removeClass("hover");
   }
 );


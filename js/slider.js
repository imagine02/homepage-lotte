
//img_slider(이미지번호 : 0,1,2)
function img_slider(img_num){
  
  // image slider
  $('.slider .sliders')
    .animate({
      marginLeft: -img_num*100 + '%'
    });
  }
  $(function(){

    var duration = 2000; //재생시간 5초
    var slider_num = 0; //이미지 번호
    //자동재생
    setInterval(function(){
      //다음 이미지로
      slider_num++;

      //마지막 이미지면 처음 이미지로
      if(slider_num > 2){
        slider_num = 0;
      }

      //이미지 슬라이더 함수 실행
    img_slider(slider_num);

    //현재 이미지 인디케이터 선택효과
    $('.slider_indicator li a').removeClass('active');
    $('.slider_indicator li')
    .eq(slider_num) /*eq는 순서*/
    .find('a')
    .addClass('active');

    }, duration);


  });

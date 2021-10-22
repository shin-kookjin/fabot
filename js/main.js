$(function(){
  //윈도우가 스크롤하면,,,
  $(window).on('scroll',function(){
    var winScroll = $(window).scrollTop();
    //console.log(winScroll);
    var headerH = $('#header').outerHeight();
    //console.log(headerH);
    
    if(winScroll > headerH){
      //console.log('스크롤의 top 값이 header 의 높이보다 큼')
      $('#header').addClass('fix');
    }else{
      $('#header').removeClass('fix');
    }
  });

  //메인 메뉴를 클릭하면,,,
  $('#header nav a').on('click',function(){
    var href = $(this).attr('href');
 
    if(href=='#'){
      $('html,body').animate({scrollTop:0}, 700);
    }else{
      var offsetTop = $(href).offset().top;
      $('html,body').animate({scrollTop:offsetTop}, 700);
    }
    return false;
  });
});
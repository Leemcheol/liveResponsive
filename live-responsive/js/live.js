// Noto Sans CJK KR CDN
// var koreanFont = new FontFace('Noto Sans CJK KR', 'url(https://cdn.jsdelivr.net/npm/noto-sans-cjk-kr@latest/fonts/NotoSansCJKkr-Regular.otf)');
// koreanFont.load().then(function(loadedFont) {
//   document.fonts.add(loadedFont);
//   document.body.style.fontFamily = "'Noto Sans CJK KR'";
// });

// 위에는 자바스크립트 문법임. 자바는 style이 들어가있고, 제이쿼리는 css가 들어가있음.
// 콘솔창에서 오류가 떠서 주석처리.

// 모바일 메뉴 - 사이트 내비게이션 열고 닫는 함수
// openNav() : "id="myNav" 가져와서 너비 100% 설정 (열기)
// closeNav() : "id="myNav"가져와서 너비 0% 설정 (닫기)
// getElementById() 메서드 : 특정 ID를 가진 요소를 선택하는 기능.

// (1) 자바스크립트
// function openNav(){
//   document.getElementById("myNav").style.width= "100%"
// }
// function closeNav(){
//   document.getElementById("myNav").style.width= "0%"
// }

// // (2) jQuery
// function openNav(){
//   $("#myNav").css("width","100%");
// }
// function closeNav(){
//   $("#myNav").css("width","0%");
// }                               // (1)과 (2) 모두 동일하게 구현되므로 아무거나 쓰기.
                                // 근데 가독성은 제이쿼리가 좀 더 좋음.

// toggle line -> X
function toggleMenu(){
  var $myNav = $('#myNav');       // 메뉴를 감싸는 전체 컨테이너의 변수 저장.
  if ($myNav.css("width") == "0px"){      // 만약 가로사이즈가 0이면 토글 버튼에 액티브 클라스를 추가하고
    $('.toggle-container').addClass('active');    // 메뉴 너비 100%로 열기
    $myNav.css("width", "100%");
  } else
  $('.toggle-container').removeClass('active');   // 그렇지 않다면 액티브 클래스를 제거하고
    $myNav.css("width", "0%");                    // 메뉴 너비 0으로 열기
}

$(function(){
  //레이어팝업
  $(".layerPopup").on("click",function(){
    $(".popup, .bg").fadeIn();
  });
  $(".close").on("click",function(){
    $(".popup").fadeOut();
    $(".bg").fadeOut();       // 둘이 같은 문법이지만 더 짧고 간편한 위의 문법을 많이 쓰자.
  });
})

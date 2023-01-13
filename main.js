// fade 효과를 위한 js

//  이미지 번호
let imgNum = 0;

function nextFadeImg() {
  imgNum++;
  if (imgNum == 4) {
    imgNum = 0;
  }
  // 나머지 이미지 비표시
  $("#gallery .sliders img").removeClass("show");
  // 현재 이미지만 표시
  $("#gallery .sliders img").eq(imgNum).addClass("show");
  console.log(imgNum);
}

function prevFadeImg() {
  imgNum--;
  if (imgNum == -1) {
    imgNum = 3;
  }
  // 나머지 이미지 비표시
  $("#gallery .sliders img").removeClass("show");
  // 현재 이미지만 표시
  $("#gallery .sliders img").eq(imgNum).addClass("show");
  console.log(imgNum);
}

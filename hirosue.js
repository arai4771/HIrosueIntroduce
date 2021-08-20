// window.addEventListener('scroll', ()=> {
//   let scrollY = window.pageYOffset;
//   let fixed = document.getElementById('scrollfixed');
//   let navheigh = fixed.getBoundingClientRect();
//   let py = scrollY + navheigh.top ;

//   if(scrollY > py) {
//     fixed.classList.add('fixed');
//   };
// });

const fadein = document.getElementById('fadein');

window.addEventListener('scroll',() => {

  const FADEINTOP = fadein.getBoundingClientRect().top;

  const WINDOWHEIGHT = window.innerHeight;

  if (WINDOWHEIGHT > (FADEINTOP + 400)) {
    fadein.classList.add('fadein-after');
}

});


// window.addEventListener('load',() => {

//   fadein.classList.add('fadein-after');


// });

$(document).ready(function(){
  $(".slide").endlessRiver({
      speed: 50,
      buttons: false,
      pause:false
  });
});



const progressBar = document.querySelector('.js-loader-progress-bar')
const progressNumber = document.querySelector('.js-loader-progress-number')

const imgLoad = imagesLoaded('body');//body内の画像を監視
const imgTotal = imgLoad.images.length;//画像の総数を取得

let imgLoaded = 0;//ロードした画像カウント
let progressSpeed = 5;//プログレスバーの進むスピード 大きいほど速くなる
let progressCount = 0;//ローディングの進捗状況 0〜100
let progressResult = 0;//ローディングの進捗状況 0〜100

//読み込み状況をアップデート
let progressInit = setInterval(function () {
  updateProgress();
}, 25);

//画像を一つロードするたびにimgLoadedのカウントをアップ
imgLoad.on('progress', function (instance, image) {
  imgLoaded++
})

//読み込み状況アップデート関数
function updateProgress() {

  //ローディング演出用の計算
  progressCount += (imgLoaded / imgTotal) * progressSpeed;

  if(progressCount >= 100 && imgTotal > imgLoaded) {
    //カウントは100以上だが画像の読み込みが終わってない
    progressResult = 99;
  } else if(progressCount > 99.9) {
    //カウントが100以上になった
    progressResult = 100;
  } else {
    //現在のカウント
    progressResult = progressCount;
  }

  //ローディング進捗状況をプログレスバーと数字で表示
  progressBar.style.width = progressResult + '%';
  progressNumber.innerText = Math.floor(progressResult);

  //ローディング完了後 0.8秒待ってページを表示
  if (progressResult >= 100 && imgTotal == imgLoaded) {
    clearInterval(progressInit);
    setTimeout(function () {
      document.querySelector('body').classList.add('is-loaded');
    }, 800);
  }
}

$(".head1").quietflow({
  theme : "bouncingBalls",
  specificColors : [
    "rgba(234, 80, 64, .5)",
    "rgba(0, 156, 117, .5)", 
    "rgba(0, 132, 178, .5)", 
    "rgba(255, 219, 0, .5)"
  ]
})


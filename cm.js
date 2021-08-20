let cms =[
  {
    url:"https://www.youtube.com/embed/rJfzMFEwfJQ",
    text:"ドコモポケベルCM",
    age:1996
  },
  {
    url:"https://www.youtube.com/embed/1bly-XCalzI",
    text:"ドコモポケベルCM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/JV1fBFGy-lw",
    text:"ホンダバイクCM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/Gh33F8Gg6uE",
    text:"クレアラシルCM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/Xi34aOcosss",
    text:"キッコーマンCM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/pd1yubjRY8Y",
    text:"FUJIMI CM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/SYOBciooReU",
    text:"ドコモはなして翻訳 CM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/X42nrgL8oH4",
    text:"楽天保険の総合窓口 CM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/5LVFjBdHlT8",
    text:"楽天モバイル CM",
    age:1998
  },
  {
    url:"https://www.youtube.com/embed/anjwXuyXR8M",
    text:"CHINTAI CM",
    age:1998
  },

] 


  // cms.forEach(function(cm){
  //   const thumbnails = document.querySelector('.thumbnails');
  //   const text = document.querySelector('.text');

  //   const div = document.createElement('div'); // <li>要素を生成
  //   const p = document.createElement('p');
  //   const iframe = document.createElement('iframe'); // <img>要素を生成

  //   iframe.src = cm.url;
  //   div.appendChild(iframe);
    
  //   p.innerHTML =  cm.text;

  //   thumbnails.appendChild(div); 
  //   text.appendChild(p);
  // });

function hirosueCM(){

  for(let i = 0;i < cms.length; i++){

    const thumbnails = document.querySelector('.thumbnails');

    const div = document.createElement('div');
    div.className = 'CM';
    div.innerHTML=`<iframe id="player" type="text/html" width="100%" height="300px" src="${cms[i].url}" frameborder="0"></iframe><br>
    <p>${cms[i].text}</p>
    `;

    thumbnails.appendChild(div);

  };
}
jQuery(".wave").raindrops({
  color: "#0bd",
  canvasHeight: 200,
  waveHeight: 400,
  frequency: 2,
});

hirosueCM();


class Movie{
  constructor(img,title,text,num,color){
    this.img = img;
    this.title = title;
    this.text = text;
    this.num = num;
    this.color = color;
  }

  sample(){
    const movies = document.querySelector('.Movies');
    

    const div = document.createElement('div');
    

    div.className= 'movie';
    
    div.innerHTML = `<div class="in" style="border:10px solid ${this.color}; "><img src ="${this.img}"  class="btn modal-open" data-modal-open="${this.num}" ></div><br>
    <h2>${this.title}</h2>`;

  //   modaldiv.innerHTML = `<div class="modal" data-modal="${this.num}">
  //   <div class="modal-cover"></div>         
  //   <div class="modal-inner">
  //     <div class="modal-content">
  //     <img src ="${this.img}" width="20%">
  //     <p>${this.text}</p>
  //       <div class="btn-wrap">
  //         <h1  class="btn btn-close">✖︎</h1>
  //       </div>
  //     </div>
  //   </div>
  // </div>`

      
    
    
    movies.appendChild(div);
    // modals.appendChild(modaldiv);
  }
  mclick(){
    const modals = document.querySelector('.Modals');
const modaldiv = document.createElement('div');
modaldiv.innerHTML = `<div class="modal" data-modal="${this.num}">
    <div class="modal-cover"></div>         
    <div class="modal-inner">
      <div class="modal-content">
      <img src ="${this.img}" width="20%">
      <p>${this.text}</p>
        <div class="btn-wrap">
          <h1  class="btn btn-close" style="margin:5px;">✖︎</h1>
        </div>
      </div>
    </div>
  </div>`
  modals.appendChild(modaldiv);
  }

}

const sample1 = new Movie("./images/okuribito.jpg","おくりびと","ひょんなことから遺体を棺に納める“納棺師”となった男が、仕事を通して触れた人間模様や上司の影響を受けながら成長していく姿を描いた感動作。監督には『壬生義士伝』の滝田洋二郎があたり、人気放送作家の小山薫堂が初の映画脚本に挑戦。","modal1","#e50044");
const sample2 = new Movie("./images/kagidorobou.jpg","鍵泥棒のメソッド","『アフタースクール』の内田けんじが監督を担当した、さまざまな要素が詰め込まれた予測不能の娯楽作。ひょんなことから人生が逆転してしまった2人の男性を巻き込んだ物語の成り行きを、笑いとサスペンスを交えて描き切る。","modal2","#ffe100");
const sample3 = new Movie("./images/littledj.jpg","Little DJ","FMラジオ局のディレクターであるたまき（広末涼子）は、深夜の担当番組の打ち切りが決定し落ち込んでいた。そんなとき、彼女は自分にラジオの楽しさを教えてくれた少年太郎（神木隆之介）のことを思い出す。1977年、函館の病院に交通事故で入院した13歳のたまき（福田麻由子）は、1つ年下の太郎と出会い意気投合するが……。","modal3","#00a0e8");
const sample4 = new Movie("./images/tetudouin.jpg","鉄道員","北海道の雪深い町の駅舎を舞台に、鉄道員として生きたひとりの男の姿を綴ったドラマ。監督は「現代任侠伝」の降旗康男。浅田次郎による第二十七回直木賞受賞の同名小説を、「植村直巳物語」の岩間芳樹と降旗監督が共同脚色。撮影を「おもちゃ」の木村大作が担当している。主演は「四十七人の刺客」の高倉健。その他、「学校III」の小林稔侍と大竹しのぶ、「20世紀ノスタルジア」の広末涼子らが出演している。","modal4","#e7382f");
const sample5 = new Movie("./images/omoinokosi.jpg","想いのこし","岡本貴也の小説を、テレビドラマ「リーガルハイ」でも共演した岡田将生と広末涼子を迎えて実写化したヒューマンコメディー。金と女に目がない青年が、ひょんなことから現世に未練を遺（のこ）した幽霊たちを成仏させようと奔走しながら騒動を巻き起こしていくさまを、涙と笑いを交えてつづる。","modal5","#c3d600");
const sample6 = new Movie("./images/baburu.jpg","バブルへGO","バブルを知らないヒロインがタイムマシンに乗って1990年に戻り、バブル崩壊を食い止めるために奔走するタイムスリップ・コメディ。『私をスキーに連れてって』などを作ったホイチョイ・プロダクションズ制作となる本作は、バブルの絶頂期の東京を舞台に日本経済史上最も盛り上がっていた時代を追体験する。","modal6","#005bac");
const sample7 = new Movie("./images/koneko.jpg","子猫の涙","1968年メキシコ五輪で銅メダルを獲得しながら、網膜はく離で若くして引退した伝説のボクサー森岡栄治の波乱の人生を映画化。彼のおいである森岡利行が監督を務め、自身が主宰する劇団の上演作品を基に、おじの破天荒な生き様を温かく描き出す。","modal7","#f4a100");
const sample8 = new Movie("./images/hana.jpg","はなちゃんの味噌汁","がんに侵され余命わずかな母親が幼い娘にみそ汁作りを通して愛情と生きる力を伝える、ドラマ化もされたエッセイを映画化。がん闘病に焦点を絞るのではなく、病と向き合う家族がそれぞれの生き方や家族のあり方を見つめながら、成長していくさまを描く。","modal8","#00a161");
const sample9 = new Movie("./images/himitu.jpg","秘密","死んだ妻の人格を宿した娘と、彼女と夫婦生活を送ることになった中年男の愛の行方を描いたドラマ。監督は「お受験」の滝田洋二郎。99年度日本推理作家協会賞を受賞した東野圭吾による同名小説を、「ＳＦ　サムライ・フィクション」の斉藤ひろしが脚色。撮影を「お受験」の栢野直樹が担当している。主演は、「鉄道員」の広末涼子と「洗濯機は俺にまかせろ」の小林薫。","modal9","#4c4298");
const sample10 = new Movie("./images/mix.jpg","ミックス","出演：新垣結衣、瑛太 他。テレビドラマ「リーガルハイ」の脚本家・古沢良太と石川淳一監督が再び組んだロマンチックコメディー。かつて天才卓球少女と呼ばれたアラサー女性が、亡き母ののこした卓球クラブの再建と、失恋相手とその恋人のペアの打倒を目標に、男女の混合ダブルスで試合に挑む姿を映す。","modal10","#df2e8a");
const sample11 = new Movie("./images/sakura.jpg","桜、再びの加奈子","小学校入学前の娘、加奈子を亡くした容子（広末涼子）。この世にいない娘に話し掛けたり、食事を作ったりする容子に、夫の信樹（稲垣吾郎）は心配しながらもイライラしていた。そんなある日、容子は妊娠中の高校生・正美（福田麻由子）に出会う。そして生まれてくる正美の子どもこそ、加奈子の生まれ変わりだと確信し……。","modal11","#e35103");
const sample12 = new Movie("./images/owata.jpg","終わった人","テレビドラマ「週末婚」などの脚本を手掛けてきた内館牧子の小説を、舘ひろしを主演に迎えて映画化。定年退職し世間から終わった人と見なされた元会社員の悲哀と、そんな夫と向き合えない妻の関係をハートフルに描く。","modal12","#00893f");
const sample13 = new Movie("./images/masao.jpg","LOVE まさおくんが行く","2000年からテレビ東京系で放送されていた長寿番組「ペット大集合！ポチたま」の人気コーナー「まさお君が行く！ポチたまペットの旅」の実話を映画化。ちょっぴり抜けていてドジな犬のまさおと、コンビの相方や恋人にも愛想をつかされた売れない芸人・松本が、番組を通じて全国を旅しながらきずなを深めていく姿を描く。","modal13","#ffe100");
const sample14 = new Movie("./images/goemon.jpg","GOEMON","織田信長（中村橋之助）を暗殺した明智光秀が討伐され、豊臣秀吉（奥田瑛二）が天下を取った時代。超人的な身体能力を武器に金持ちから金品を盗み、貧しき者に分け与える盗賊・石川五右衛門（江口洋介）がすい星のごとく現れ、庶民を熱狂させる。そんな中、五右衛門は盗み出した財宝の中に重大な秘密が隠されている南蛮製の箱を見つけるが……。","modal14","#0080cc");
const sample15 = new Movie("./images/Presents.jpg","Presents 合鍵","編集プロダクションで多忙な日々を送る由加里（広末涼子）は、8年間交際中の彼であるフリーカメラマンの博明（玉山鉄二）とお互い忙しくてなかなか会えないでいた。そんなある日、久々に博明に会うことになって、うれしさを隠せない由加里。しかし、由加里を待っていたのは、博明から突然告げられた別れ話だった。","modal15","#d1002f");
const sample16 = new Movie("./images/renai.jpg","恋愛寫眞 Collage of Our Life","東京とニューヨークを舞台に、プロのカメラマンを目指す青年のピュアな愛と奇跡を描いた青春ドラマ。監督は「トリック　劇場版」の堤幸彦。脚本は緒川薫。撮影を「2ＬＤＫ」の唐沢悟が担当している。主演は、「Jam Films／ARITA」の広末涼子と「青い春」の松田龍平。","modal16","#8ec31e");
const sample17 = new Movie("./images/zero.jpg","ゼロの焦点","2009年に生誕100周年を迎える社会派ミステリーの巨匠、松本清張の同名傑作小説を映画化。結婚まもなく夫が失踪（しっそう）した妻が、その謎を追ううちに不可解な連続殺人事件に巻き込まれていく様を、『グーグーだって猫である』の犬童一心監督が描き出す。","modal17","#e35103");
const sample18 = new Movie("./images/wasabi.jpg","WASABI","強引すぎる捜査で恐れられるパリの刑事ユベールに、日本からかつての恋人の死を報せる電話が入る。急遽日本へ飛んだユベールを待っていたのは、存在すら知らなかった自分の娘ユミと、2億ドルの遺産だった。会ったことのない父親の憎むユミに、父親であることを告げられないまま彼女を守るユベール。そんな2人に巨大な魔の手が迫る…。","modal18","#00a5b9");

sample1.sample();
  sample2.sample();
  sample3.sample();
  sample4.sample();

  sample1.mclick();
  sample2.mclick();
  sample3.mclick();
  sample4.mclick();



  const modalOpen = document.querySelectorAll('.modal-open');
  const modal = document.querySelectorAll('.modal');
  const modalCover = document.querySelectorAll('.modal-cover');
  
  let modalCloseAction;
  let dataModalOpen;
  let targetModal;
  
  const TIMEOUT_SPEED = 500;
  
  for (let i = 0; i < modalOpen.length; i++) {
      
      //モーダルを下げる処理
      modalCloseAction = function(e) {
        targetModal = e.currentTarget.closest('.modal');
        targetModal.classList.add('is-close');
  
        setTimeout(function(e) {
          targetModal.classList.remove('is-open');
          targetModal.classList.remove('is-close');
        }, TIMEOUT_SPEED);
      };
      
      // グレー部分をクリックでmodalを下げる
      const modalWrapClose = function() {
           modalCover[i].addEventListener('click',function(e){
             modalCloseAction(e);
        },false);
      };
  
      // modalをあげる
      const modalWrapOpen = function(e) {
        dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
        for (var b = 0; b < modal.length; b++) {
        
          if (modal[b].getAttribute('data-modal') === dataModalOpen) {
            modal[b].classList.add('is-open');
            modalWrapClose();
            return false;
          }
        }
      };
      
      modalOpen[i].addEventListener('click', function(e) {
        modalWrapOpen(e);
      }, false);
  }
  
  // modalを下げる
  const modalBtnClose = document.querySelectorAll('.btn-close');
  for (let n = 0; n < modalBtnClose.length; n++) {
      modalBtnClose[n].addEventListener('click', function(e) {
        modalCloseAction(e);
        return false;
      }, false);
  };
  

  




document.getElementById('open').addEventListener('click',()=>{

  
  
  
  sample5.sample();
  sample6.sample();
  sample7.sample();
  sample8.sample();
  sample9.sample();
  sample10.sample();
  sample11.sample();
  sample12.sample();
  sample13.sample();
  sample14.sample();
  sample15.sample();
  sample16.sample();
  sample17.sample();
  sample18.sample();


  sample5.mclick();
  sample6.mclick();
  sample7.mclick();
  sample8.mclick();
  sample9.mclick();
  sample10.mclick();
  sample11.mclick();
  sample12.mclick();
  sample13.mclick();
  sample14.mclick();
  sample15.mclick();
  sample16.mclick();
  sample17.mclick();
  sample18.mclick();


  let b4 = document.querySelectorAll('.b4');

  for(let i = 0; i< b4.length; i++){
    b4[i].classList.add('b4after');1
  };


  // modalを出す
const modalOpen = document.querySelectorAll('.modal-open');
const modal = document.querySelectorAll('.modal');
const modalCover = document.querySelectorAll('.modal-cover');

let modalCloseAction;
let dataModalOpen;
let targetModal;

const TIMEOUT_SPEED = 500;

for (let i = 0; i < modalOpen.length; i++) {
    
    //モーダルを下げる処理
    modalCloseAction = function(e) {
      targetModal = e.currentTarget.closest('.modal');
      targetModal.classList.add('is-close');

      setTimeout(function(e) {
        targetModal.classList.remove('is-open');
        targetModal.classList.remove('is-close');
      }, TIMEOUT_SPEED);
    };
    
    // グレー部分をクリックでmodalを下げる
    const modalWrapClose = function() {
         modalCover[i].addEventListener('click',function(e){
           modalCloseAction(e);
      },false);
    };

    // modalをあげる
    const modalWrapOpen = function(e) {
      dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
      for (var b = 0; b < modal.length; b++) {
      
        if (modal[b].getAttribute('data-modal') === dataModalOpen) {
          modal[b].classList.add('is-open');
          modalWrapClose();
          return false;
        }
      }
    };
    
    modalOpen[i].addEventListener('click', function(e) {
      modalWrapOpen(e);
    }, false);
}

// modalを下げる
const modalBtnClose = document.querySelectorAll('.btn-close');
for (let n = 0; n < modalBtnClose.length; n++) {
    modalBtnClose[n].addEventListener('click', function(e) {
      modalCloseAction(e);
      return false;
    }, false);
};



},{ once: true });




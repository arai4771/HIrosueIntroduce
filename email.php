<?php 


  session_start();

  header('X-FRAME-OPTIONS: SAMEORIGIN');

  

  $error=[];
  

  if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $post = filter_input_array(INPUT_POST,$_POST);
    $post = preg_replace('/^[\s　]*(.*?)[\s　]*$/u', '\1', $post);
    

  if($post['name'] === ''){
    $error['name'] = 'blank';
  }

  if($post['mail'] === ''){
    $error['mail'] = 'blank';
  }else if(!filter_var($post['mail'],FILTER_VALIDATE_EMAIL)){
    $error['mail'] = 'mail';
  }
  // if($post['gender'] === ''){
  //   $error['gender'] = 'blank';
  // }
  if(!isset($post['gender'])){
    $error['gender'] = 'blank';
  }




  if($post['opinion'] === ''){
    $error['opinion'] = 'blank';
  }

  if(count($error) === 0){
    $_SESSION['form'] = $post;
    header('Location: conform.php');
    exit();
  }
  }else{
    if(isset($_SESSION['form'])){
      $post = $_SESSION['form'];
    }
  }





?>

<?php require('emailheader.php') ?>

<div class="ebox">

<h2>問い合わせフォーム</h2>

<form action="" method="post">
  <p>名前</p>
  <?php if($error['name'] === 'blank') : ?>
        <small style="color: red;">※名前を記入してください</small>
    <?php endif;?><br>
  <input type="text" name="name" placeholder="名前" value="<?php echo htmlspecialchars($post['name']); ?>">

  <p>メール</p>
  <?php if($error['mail'] === 'blank') : ?>
        <small style="color: red;">※メールを記入してください</small>
  <?php endif;?>
  <?php if($error['mail'] === 'mail') : ?>
        <small style="color: red;">※正しいメールを入力してください。</small>
    <?php endif;?><br>
  <input type="text" name="mail" placeholder="example@mail.com" value="<?php echo htmlspecialchars($post['mail']); ?>">

  <p>性別</p>
  <?php if($error['gender'] === 'blank') : ?>
        <small style="color: red;">※性別を選んでください</small>
  <?php endif;?><br>
    
  <label><input type="radio" name="gender" value="男性">男性</label>
  <label><input type="radio" name="gender" value="女性">女性</label>


  <p>問い合わせ内容</p>
  <?php if($error['opinion'] === 'blank') : ?>
        <small style="color: red;">※問い合わせ内容を記入してください</small>
    <?php endif;?><br>
  <textarea type="text" name="opinion" placeholder="" ><?php echo htmlspecialchars($post['opinion']); ?></textarea>

<br>

<input type="submit">

</form>


</div>

<canvas class="background"></canvas>
<script src="emailhead.js"></script>
</body>
</html>
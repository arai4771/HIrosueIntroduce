<?php   
 session_start();

 header('X-FRAME-OPTIONS: SAMEORIGIN');

 




 if(!isset($_SESSION['form'])){
    header('Location: index.php');
    exit();
 }else{
    $post = $_SESSION['form'];
 }

 $post = $_SESSION['form'];

 if($_SERVER['REQUEST_METHOD'] === 'POST'){
  $to = 'your@gmail.com';
  $from = $post['mail'];
  $subject = '問い合わせが来ました';
  $body = <<<EOT
  お名前｜{$post['name']}
  用件｜{$post['opinion']}
  EOT;

  mb_send_mail($to, $subject, $body, "From: {$from}");

  unset($_SESSION['form']);
  header('Location: complete.php');
  exit();
}

?>

<?php require('emailheader.php') ?>

<div class="ebox">


<h2>確認ページ</h2>
<small style="color: red;">※問い合わせ内容が間違っていないか確認してください</small>
<form action="" method="post">

   

   <dl>
      <dt>お名前</dt>
      <dd><?php echo htmlspecialchars($post['name']); ?> </dd>

      <dt>メール</dt>
      <dd><?php echo htmlspecialchars($post['mail']); ?> </dd>

      <dt>性別</dt>
      <dd><?php echo htmlspecialchars($post['gender']); ?></dd>

      <dt>お問い合わせ内容</dt>
      <dd><?php echo nl2br(htmlspecialchars($post['opinion'])); ?></dd>
   </dl>

      <a href="email.php">戻る</a>
      <button type="submit">送信する</button>
</form>

</div>
<canvas class="background"></canvas>
<script src="emailhead.js"></script>
</body>
</html>
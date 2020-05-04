<?php
if(!isset($_POST['name']) and !isset($_POST['tel']) and !isset($_POST['message'])){
    ?> 
    <form action="send.php" method="post" class="heading_form">
    <p><span>Напиши</span> нам</p>

    <input type="text" class="input_search" name="name" placeholder="Ваше имя" required>

    <input type="text" class="input_tel" name="tel" placeholder="Ваш телефон" required>

    <textarea name="message" id="heading_textarea" placeholder="Сообщение" required></textarea>

    <input type="submit" class="heading_form-btn" value="Записаться" name="scribe">
    </form> <?php
   } else {

        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $message = $_POST['message'];

        $name = htmlspecialchars($name);
        $tel = htmlspecialchars($tel);
        $message = htmlspecialchars($message);

        $name = urldecode($name);
        $tel = urldecode($tel);
        $message = urldecode($message);

        $name = trim($name);
        $tel = trim($tel);
        $message = trim($message);

        echo $name;
        echo "<br>";
        echo $tel;
        echo "<br>";
        echo $message;
        echo "<br>";

        mail("Sold24@yandex.ru", "Заявка с сайта", "Имя:".$name.". telefon: ".$tel ,"From: example2@mail.ru \r\n");

        if (mail("Sold24@yandex.ru", "Заявка с сайта", "Имя:".$name.". telefon: ".$tel ,"From: example2@mail.ru \r\n"))
        {
            echo "сообщение успешно отправлено";
        } else {
            echo "при отправке сообщения возникли ошибки";
        }
   } 
   ini_set('display_errors','On');
    error_reporting('E_ALL');

?>   
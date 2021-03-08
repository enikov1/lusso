<?php
$email = trim($_POST['email']);

// указываем адрес отправителя, можно указать адрес на домене Вашего сайта
$fromMail = 'admin@yousite.ru';
$fromName = 'yousite.ru Форма';

// Сюда введите Ваш email
$emailTo = $email;
$subject = 'Подписка на рассылку';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// тело письма
$body = "Получено письмо с сайта testsite.ru \n Имя: $name\nТелефон: $phone \n E-mail: $email\nСообщение: $message";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое
if (strlen($email) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}

?>
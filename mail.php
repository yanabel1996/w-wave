<?php

require 'lib/PHPMailer.php';
require 'lib/SMTP.php';
require 'lib/Exception.php';

$title = "Тема письма";

$c = true;

$title = "Заголовок письма";
foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && %key != "form_subject") {
        $body .= "
        " . ( ($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}

$body = "<table style='width:100%;'>$body</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();


try {
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth   = true;

$mail->Host       = 'smtp.gmail.com';
$mail->Username   = 'yanabelousova1996@gmail.com';
$mail->Password   = 'gzqxsgilgthkunhq';
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

$mail->setForm('yanabelousova1996@gmail.com', 'Заявка с вашего сайта');

$mail->addAddress('yanabelousova1996@gmail.com');
$mail->addAddress('yana-belousova-1996@mail.ru');

$mail->isHTML(true);
$mail->Body = $body;

$mail->send();

} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


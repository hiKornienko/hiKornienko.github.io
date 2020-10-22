<?php 
$to  = $_POST['to']; 

$subject = $_POST['title']; 

$message = '<b>Name</b> '.$_POST['name'].'<br>';
$message .= '<b>Phone</b> '.$_POST['phone'].'<br>';
$message .= '<b>Email</b> '.$_POST['email'].'<br>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 

mail($to, $subject, $message, $headers); 

echo json_encode($_POST);
?>
<?php

if(!isset($_POST['submit']))
{
    echo "error, you need to submit the form first!";
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_subject = "New message received from $name";
$email_body = "email address is $visitor_email. \n" .
    "____________________________ \n".
    "message is: \n $message.";

$to = 'toby_underwood@yahoo.co.uk';
$headers = "From: $visitor_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Contact Confirmation</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet">
</head>
<body class="form">
<h1> <?php if((!filter_var($visitor_email, FILTER_VALIDATE_EMAIL))) {
        echo "Invalid email";
        echo "<br>";?>
        <h4>Email entered: <?php echo$visitor_email?></h4>
        <img src="assets/logo/sad-face-emoji.svg" alt="sad face">
        <h3><?php  echo "Please enter a valid email";?> </h3>
        <button><a href="index.html#contact">Back to form 🔙</a></button>
        <?php exit();
    } else {
        $sent = mail($to,$email_subject,$email_body,$headers);
    }?>
</h1>
<h1> <?php if($sent) {?>
        <img src="assets/logo/thumbs-up.svg" alt="thumbs up">
        <h1>Thanks</h1>
        <h3>Your message has been successfully sent!</h3>
        <button><a href="index.html">Back to homepage</a></button>
    <?php } else {
        header("location: http://localhost:1234/voiceover/index.html#contact);
        exit()");
     }?>
</h1>
<footer>
    <p>Coded by Nicolas Herbreteau. 2022</p>
</footer>
</body>

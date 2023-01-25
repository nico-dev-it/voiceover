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

if((!filter_var($visitor_email, FILTER_VALIDATE_EMAIL))) {
    echo '<script type="text/javascript">';
    echo 'alert("Please enter a valid email")';
    echo '</script>';
    $script = "<script>
    window.location = 'http://localhost:1234/voiceover/index.html#contact';</script>";
    echo $script ;
} else {
    $sent = mail($to,$email_subject,$email_body,$headers);
}

if($sent) {
    echo '<script type="text/javascript">';
    echo 'alert("Your message has been sent! Thank you")';
    echo '</script>';
    $script = "<script>
    window.location = 'http://localhost:1234/voiceover/index.html';</script>";
    echo $script ;
} else {
    echo '<script type="text/javascript">';
    echo 'alert("Something went wrong, please try again.")';
    echo '</script>';
    $script = "<script>
    window.location = 'http://localhost:1234/voiceover/index.html#contact';</script>";
    echo $script ;


}


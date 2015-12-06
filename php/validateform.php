<?php
//@author = mycodde.blogspot.com
require_once "recaptchalib.php";
// reCAPTCHA supported 40+ languages listed here: https://developers.google.com/recaptcha/docs/language
$lang = "en";
// The response from reCAPTCHA
$resp = null;
// The error code from reCAPTCHA, if any
$error = null;
$secret_key = ""; //Replcae this key with your Key Create one from - https://www.google.com/recaptcha/admin
$reCaptcha = new ReCaptcha($secret_key); 
if ($_POST["g-recaptcha-response"]) {
    $resp = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
	//print_r($resp); To See the response object uncomment this
} else {
	echo "Recaptcha Not submitted";
}
if ($resp != null && $resp->success) {
    echo "Recaptcha Verification Success";
	//Write other FORM password and Email Validation Procedures
} else {
	echo "Recaptcha Verification Error";
}
?>
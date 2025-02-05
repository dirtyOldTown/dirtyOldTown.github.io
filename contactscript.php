<?php
$email = $_POST["email"];
$message = $_POST["komentar"];
mail("boloks70@gmail.com", "Poruka iz kontakt forme", $message, "From: $email");
?>
Vaša poruka je uspešno poslata!
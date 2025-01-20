<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; 
mail("boloks70.gmail.com","Poruka od korisnika", "",  $_POST["email"] );
?>
</body>
</html>
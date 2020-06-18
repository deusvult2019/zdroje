<!DOCTYPE html>
<html>
<head>
	<title>mail</title>
	<link rel="stylesheet" type="text/css" href="../css/style.css">	
		<meta charset="UTF-8">		
		<meta name="description" content="Projekt na ZTMO">
		<meta name="author" content="Nikita Tomanec">
</head>
<body>
	<div class="ma">
		<form action="" method="POST">
		<label for="mail">Mail</label>
		<input type="text" name="mail" id="mail" class="aaa">
		<label for="text">Text</label>
	    <textarea rows="5" cols="100" name="koment" id="text" class="aaa"> </textarea><br>

	    <input type="submit" value="OK">

	  	</form>
	</div>

<?php
if($_POST)
{
$msg = $_POST['koment'];
$msg = wordwrap($msg,70);
$mail=$_POST['mail'];


mail("nikitatomanec@gmail.com","odosielatel".$mail,$msg);
}
?>

</body>
</html>
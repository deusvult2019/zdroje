<?php include 'sel.php';?>
<?php if($_POST)
{
	$body = $_POST['body'];
	$koment = $_POST['koment'];
	$klady = $_POST['klady'];
	$zapory = $_POST['zapory'];
	if(is_numeric($body) &&  $body <6 && $body > -1 && trim($koment)!=''&& trim($zapory)!=''&& trim($klady)!='')
	{
if($_SESSION['lang'] == 'sk')
{
	
	$handle = fopen("komentare.php","a");
	fwrite($handle, "<div class=\"rec-vel\">
					<div class=\"rec-hod\">
						<p>".$body."/5</p>
					</div>
					<div class=\"rec-text\">
						<p>".$koment."<br> Klady:".$klady."<br> Zápory:".$zapory."
						</p>
					</div>
				</div>"	);
	fclose($handle);
}
elseif ($_SESSION['lang'] == 'en') {
	
	$handle = fopen("coments.php","a");
	fwrite($handle, "<div class=\"rec-vel\">
					<div class=\"rec-hod\">
						<p>".$body."/5</p>
					</div>
					<div class=\"rec-text\">
						<p>".$koment."<br> Klady:".$klady."<br> Zápory:".$zapory."
						</p>
					</div>
				</div>"	);
	fclose($handle);
}	
}
}
?>

<!DOCTYPE html>
<html >
	<head>
		<link rel="stylesheet" type="text/css" href="../css/style.css">	
		<title><?php   echo $LANG['re-h']; ?></title>
		<meta charset="UTF-8">		
		<meta name="description" content="Projekt na ZTMO">
		<meta name="author" content="Nikita Tomanec">
		<meta name="keywords" content="ASUS,Max,3">	
	</head>
	<body>
		<?php include 'menu.php';?>
		<h1><?php   echo $LANG['re-h']; ?></h1>
			<article>
			<?php
			if($_SESSION['lang'] == 'sk'){
				include "komentare.php"; 
			}
			elseif ($_SESSION['lang'] == 'en') {
				include "coments.php"; 
			}
				?>
			</article>		
			
			<div class="lul">
				<form  action="" method="POST">	
					<p><?php echo $LANG['re-1'];?></p><br>
					<?php echo $LANG['re-2'];?><br><input type="text" name="body" class="bod"><br>
					<?php echo $LANG['re-3'];?><br> <textarea rows="4" cols="50" name="koment"> </textarea><br>
					<?php echo $LANG['re-4'];?><br><input type="text" name="klady" class="tex">	<br>
					<?php echo $LANG['re-5'];?><br><input type="text" name="zapory" class="tex"><br>
					<input type="submit" value="<?php echo $LANG['jaz']; ?>">
				</form>
			</div>
		
		<footer class="foot">
			<p>
				<a href="mail.php" target="blank" class="fod"> <?php echo $LANG['footer']; ?></a>
			</p>
		</footer>
	</body>
</html>
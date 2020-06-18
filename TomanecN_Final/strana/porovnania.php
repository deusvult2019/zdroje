<?php include 'sel.php';?>
<!DOCTYPE html>
<html >
	<head>
		<link rel="stylesheet" type="text/css" href="../css/style.css">	
		<title><?php   echo $LANG['po-h']; ?></title>
		<meta charset="UTF-8">
		<meta name="description" content="Projekt na ZTMO">
		<meta name="author" content="Nikita Tomanec">
		<meta name="keywords" content="ASUS,Max,3">	
	</head>
	<body>
		<?php include 'menu.php';?>		
		<h1><?php   echo $LANG['po-h']; ?></h1>		
		<article>
			<div class="por-upr">
				<h2>Asus Zenfone 3 max</h2>
				<img src="../img/uz1.png" class="por-img" alt="uzivatelske">
				<p>
					<?php   echo $LANG['po-1']; ?>
				</p>
			</div>
			<div class="por-upr">
				<h2>Samsung Galaxy note s4</h2>
				<img src="../img/sg4.jpg" class="por-img" alt="Samsung">
				<p>
					<?php   echo $LANG['po-2']; ?>
				</p>
			</div>
		</article>
		<footer class="foot">
			<p>
				<a href="mail.php" target="blank" class="fod"> <?php echo $LANG['footer']; ?></a>
			</p>
		</footer>
	</body>
</html>
<?php include 'sel.php';?>
<!DOCTYPE html>
<html >
	<head>
		<link rel="stylesheet" type="text/css" href="../css/style.css">	
		<title><h1><?php echo $LANG['pr-h']; ?></h1></title>
		<meta charset="UTF-8">
		<meta name="description" content="Projekt na ZTMO">
		<meta name="author" content="Nikita Tomanec">
		<meta name="keywords" content="ASUS,Max,3">	
	</head>
	<body>
		<?php include 'menu.php';?>
		<article>
			<h1><?php echo $LANG['pr-h']; ?></h1>
			<div>
				<div class="pri-style">
					<p>
						<?php echo $LANG['pr-p1']; ?>
					</p>
				</div>			
				<img src="../img/Adapter.jpg" alt="adapter" class="obr-por"/><br>
				<img src="../GIF/GIF2.gif " class="jif" alt="zapojenie">			
			</div>
			<div>
				<div class="pri-style">
					<p>
						<?php echo $LANG['pr-p2']; ?>
					</p>
				</div>			
				<img src="../img/OTG.jpg" alt="otg" class="obr-por"/>		
			</div>
			<div>
				<div class="pri-style">
					<p>
						<?php echo $LANG['pr-p3']; ?>
					</p>
				</div>			
				<img src="../img/sluchatka.jpg" alt="sluchatka" class="obr-por"/>
				<img src="../GIF/GIF1.gif " class="jif" alt="zapojenie">
			</div>
		</article>
		<footer class="foot">
			<p>
				<a href="mail.php" target="blank" class="fod"> <?php echo $LANG['footer']; ?></a>
			</p>
		</footer>
	</body>
</html>
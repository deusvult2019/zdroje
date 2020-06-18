<?php include 'sel.php';?>

<!DOCTYPE html>
<html >
	<head>
		<link rel="stylesheet" type="text/css" href="../css/style.css">	
		<title><?php echo $LANG['it-h']; ?></title>
		<meta charset="UTF-8">
		<meta name="description" content="Projekt na ZTMO">
		<meta name="author" content="Nikita Tomanec">
		<meta name="keywords" content="ASUS,Max,3">		
	</head>
	<body>
		<?php include 'menu.php';?>
		<h1><?php echo $LANG['it-h']; ?></h1>
		<article class="stred-style">
			<img src="../img/predok-2.jpg" class="velkost-inf" alt="predok">
			<p>
				<?php echo $LANG['it-p1']; ?>
			</p>
			<img src="../img/back.jpg" class="velkost-inf" alt="back">
			<p>
				<?php echo $LANG['it-p2']; ?>
			</p>
			<img src="../img/uz2.png" class="velkost-inf2" alt="uzivatelske rozhranie" >

			<img src="../img/uz3.png" class="velkost-inf2 nie" alt="uzivatelske rozhranie">
			
			<video width="320" height="240" controls >
  				<source src="../videa/video1.mp4" type="video/mp4">  				
			</video>
			
			<video width="320" height="240" controls class="nie" >				
  				<source src="../videa/video2.mp4" type="video/mp4">
			</video>
			
			<p><?php echo $LANG['it-p3']; ?> </p>
			<p>skrillex</p>
			<audio controls>
  				<source src="../zvonenia/skrillex_2018.mp3" type="audio/mpeg">  			
			</audio>
			<p>Darth Vader</p>	
			<audio controls>
  				<source src="../zvonenia/darth_vader_ringtone.mp3" type="audio/mpeg">  			
			</audio>			
			<p>Deadpool</p>
				<audio controls>
  				<source src="../zvonenia/deadpool_iphone.mp3" type="audio/mpeg">  			
			</audio>		
		</article>
			
		<footer class="foot">
			<p>
				<a href="mail.php" target="blank" class="fod"> <?php echo $LANG['footer']; ?></a> 
			</p>
		</footer>	
	</body>
</html>
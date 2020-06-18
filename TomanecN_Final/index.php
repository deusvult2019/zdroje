<?php include 'strana/sel.php';?>

<!DOCTYPE html>
<html >

	<head>
		<link rel="stylesheet" type="text/css" href="css/style.css">	
		<title><?php echo $LANG['in']; ?></title>
		<meta charset="UTF-8">
		<meta name="description" content="Projekt na ZTMO">
		<meta name="author" content="Nikita Tomanec">	
		<meta name="keywords" content="ASUS,Max,3">	
	</head>
	<body>
		<header class="stred">						   					
			<img src="img/predok.png" class="banner" alt="predok">		   		
		</header>	   		
		<nav>
			<ul>
				<li><img src="img/logo.svg" class="logo" alt="logo"></li>
				<li><a href="index.php?lang=<?php echo $_SESSION['lang'] ?>" class="od"><?php   echo $LANG['in']; ?></a></li>
  				<li><a href="strana/informacie_o_telefone.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str1']; ?></a></li>
  				<li><a href="strana/technicke_specifikacie.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str2']; ?></a></li>
  				<li><a href="strana/Prislusenstvo.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str3']; ?></a></li>
  				<li><a href="strana/recenzie_pouzivatelov.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str4']; ?></a></li>
  				<li><a href="strana/vyhody_a_nevyhody.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str5']; ?></a></li>
  				<li><a href="strana/porovnania.php?lang=<?php echo $_SESSION['lang'] ?>" class="od"><?php   echo $LANG['str6']; ?></a></li>
  				<?php if($_SESSION['lang'] == 'sk'){
  							$jaz = 'en';
  							$JAZ = 'ENG';
  							}
  					elseif ($_SESSION['lang'] == 'en') {
  							$jaz = 'sk';
  							$JAZ = 'SK';
  						}
				?>
				<li><a href="?lang=<?php echo $jaz;?>"class="od"><?php echo $JAZ;?></a></li>				
			</ul>
		</nav>
		
		<h1><?php   echo $LANG['h1']; ?></h1>	
		<article class="stred-style">
			<p>
				<?php   echo $LANG['p1']; ?>
				<div class="stred"><img src="img/obal.jpg" alt="obal" class="velkost-uvod"></div>
			</p>
		</article>	
		<footer class="foot">
			<p>
				<a href="strana/mail.php" target="blank" class="fod"> <?php echo $LANG['footer']; ?></a>
			</p>
		</footer>	
	</body>
</html>

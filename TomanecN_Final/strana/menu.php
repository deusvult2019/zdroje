<header class="stred">						   					
			<img src="../img/predok.png" class="banner" alt="predok">		   		
		</header>	   		
		<nav>
			<ul>
				<li><img src="../img/logo.svg" class="logo" alt="logo"></li>
				<li><a href="../index.php?lang=<?php echo $_SESSION['lang'] ?>" class="od"><?php   echo $LANG['in']; ?></a></li>
  				<li><a href="informacie_o_telefone.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str1']; ?></a></li>
  				<li><a href="technicke_specifikacie.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str2']; ?></a></li>
  				<li><a href="Prislusenstvo.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str3']; ?></a></li>
  				<li><a href="recenzie_pouzivatelov.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str4']; ?></a></li>
  				<li><a href="vyhody_a_nevyhody.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str5']; ?></a></li>
  				<li><a href="porovnania.php?lang=<?php echo $_SESSION['lang'] ?>"class="od"><?php   echo $LANG['str6']; ?></a></li>
  				<?php if($_SESSION['lang'] == 'sk'){
  							$jaz = 'en';
  							$JAZ = 'ENG';
  							}
  					elseif ($_SESSION['lang'] == 'en') {
  							$jaz = 'sk';
  							$JAZ = 'SK';
  						}
				?>
				<li><a href="?lang=<?php echo $jaz;?>" class="od"><?php echo $JAZ;?></a></li>
			</ul>
		</nav>
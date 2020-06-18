<?php
session_start();  
 
  if (isset($_GET['lang'])) {
     
    if ($_GET['lang'] == 'en') {
           
      include 'jaz/en.php';
      $_SESSION['lang'] = 'en';
    } else {
       
      include 'jaz/sk.php';
      $_SESSION['lang'] = 'sk';
    }
  } else if (isset($_SESSION['lang'])) {    
 
    if ($_SESSION['lang'] == 'en') {
       
      include 'jaz/en.php';
    } else {
       
      include 'jaz/sk.php';
    }
  } else {
        
    include 'jaz/sk.php';
    $_SESSION['lang'] = 'sk';
  }
  ?>
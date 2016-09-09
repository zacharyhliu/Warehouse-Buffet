<html>
	<head>
		<title>Our Menu | Warehouse Buffet</title>

		<!-- Import css libraries -->
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    	<link href='http://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css'>
    	<link href='http://fonts.googleapis.com/css?family=Karla' rel='stylesheet' type='text/css'>
    	<link href='../css/menu.css' rel='stylesheet'>
	<head>

	<body>

		<!-- This is the top part of the menu page -->
		<div class="bgimg-1">
			<div class="caption-1">
				<span class="border">OUR MENU</span>
			</div>
		</div>
		<!-- End of top menu page -->

		<!-- Beginning of Menu -->
		<div class="menu-container">
			<h3 class="kbbq-menu-title"> ALL YOU CAN EAT KBBQ</h3>
			<p class="kbbq-lunch-menu-1">
			<!-- php code that parses the menu text file -->
			<?php 
				$myKbbqMenu = fopen("../txt/kbbqMenu.txt", "r") or die("Connection Problem");
				while(!feof($myKbbqMenu)){
					echo fgets($myKbbqMenu) . "<br>";
				}
				fclose($myKbbqMenu);
			?>
		</p>
		</div>
		<!-- End of menu -->

	</body>


<html>
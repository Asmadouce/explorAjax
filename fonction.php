<?php 
/*Les fonctions de l'explorateur ICI*/
$dir =$_POST['dirname'];


function ouvrir($dir) {
// Open a known directory, and proceed to read its contents
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if (filetype($dir . $file) == 'dir') {
                    echo '<div class="elements" id="' . $file . '"><i class="fas fa-folder"></i>' . $file . '</div>';
                }else{
                    echo '<div class="filelements"><i class="far fa-file"></i>' . $file . '</div>';
                }
                
            }
            closedir($dh);
        }
    }
}

ouvrir($dir);

?>
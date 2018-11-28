<?php 
/*Les fonctions de l'explorateur ICI*/


function ouvrir() {
    $dir =$_POST['dirname'];
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if (filetype($dir . $file) == 'dir') {
                    echo '<div class="elements" id="' . $file . '"><i class="fas fa-folder fa-2x"></i><br>' . $file . '</div>';
                }else{
                    echo '<div class="filelements"><i class="far fa-file fa-2x"></i><br>' . $file . '</div>';
                }
                
            }
            closedir($dh);
        }
    }
}

ouvrir();

?>
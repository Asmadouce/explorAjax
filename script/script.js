// le script ici

$(document).ready(function(){


    function navigation(path){

        $.ajax({
            url:'fonction.php',
            type:'POST',
            data:{
                dirname: path
            },
            datatype: "html",

            success: function(reponse) {
                $('#champ_dossier').html(reponse);
                $(".elements").click(function(){    
                    var dossier =$(this).attr('id');
                    path = path + dossier + '/';
                    boutonnage(path);
                    navigation(path);
                });
                /*$("#retour").click(function(){
                    pathButton = path.split('/');
                    console.log(pathButton);
                    pathButton.pop();                    
                    pathButton.shift();
                    pathButton.pop();
                    path = '/' + pathButton.join('/') + '/';
                    if(path == '//'){path = '/';}
                    navigation(path);
                    boutonnage(path);
                });*/
            }
        });
    
    }

    function boutonnage(path){
        var pathButton = path.split('/');
        pathButton.pop();                    
        pathButton.shift();
        var text, pathL, i;
        pathL = pathButton.length;
        text = "<span>";
        for(i=0;i<pathL;i++){
            text += '<button class="retour" id="' + i + '">' + pathButton[i] + '</button>';
        }
        text += "</span>";
        $('#chemin').html(text);
        $(".retour").click(function(){
            var dos = parseInt($(this).attr('id'));
            pathButton.splice(dos + 1);
            path = '/' + pathButton.join('/') + '/';
            navigation(path);
        });

    }

    navigation('/');

});
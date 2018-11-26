// le script ici

$(document).ready(function(){
    $.ajax({
        url:'fonction.php',
        type:'POST',
        data:{
            dirname:'/'
        },
        dataType: "html",

        success: function(reponse) {
            $('#champ_dossier').html(reponse);
        }
    });

    $('.elements').click(function(){
        $.ajax({
            url:'fonction.php',
            type:'POST',
            data:{
                dirname:'/'
            },
            dataType: "html",

            success: function(reponse) {
                $('#champ_dossier').html(reponse);
            }
        });
    });
});
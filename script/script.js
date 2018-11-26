// le script ici

$(document).ready(function(){
    $.ajax({
        url:'fonction.php',
        type:'POST',
        data:{
            dirname:'/'
        },
        dataType: "html",

        success:
        function(reponse) {
            $('#champ_dossier').html(reponse);
            $(".elements").click(function(){
                var dossier = $(this).attr('id');
                $.ajax({
                    url:'fonction.php',
                    type:'POST',
                    data:{
                        dirname:'/' + dossier + '/'
                    },
                    datatype: "html",

                    success:
                    function(reponse) {
                        $('#champ_dossier').html(reponse);
                    }
                })
            });
        },
    });
});
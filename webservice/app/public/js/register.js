$(document).ready(function () {
    $('#buttonSaveScanner').click(function (e) {
        var scanner = $("#id").val();
        var addr = $("#addr").val();
        var x = $("#x").val();
        var y = $("y").val();

        var url = "http://localhost:8080/api-iot/scanners/insert";

        var formdata = {
            "addr": addr,
            "name": scanner,
            "x": x,
            "y": y
        };
        
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formdata),
            dataType: 'json',
            url: url
        });
    });
    $('#scroll1').change(function () {
        var posX, posY;
        var value = $(this).val();
        if (value !== "0") {
            $("#formulario").hide();
            var img = document.createElement("IMG");
            img.src = "/images/" + value + ".png";
            img.id = "img1";
            var oldImg = document.getElementById("img1");
            if (oldImg !== null) {
                document.getElementById("imagens").replaceChild(img, oldImg);
            }
            else {
                document.getElementById("imagens").appendChild(img);
            }
            $('#img1').click(function (e) {
                //pegando posicao
                posX = $(this).offset().left;
                posY = $(this).offset().top;
                posY = e.pageY - parseInt(posY);
                posX = e.pageX - posX;
                $("#x").val(posX);
                $("#y").val(posY);
                alert("x:" + (posX) + "y:" + (posY));
                $("#img1").hide();
                $("#formulario").show();
            });
            $("#scroll1").val("0")
        }
    });

});


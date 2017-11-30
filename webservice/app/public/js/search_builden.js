$(document).ready(function () {

    $('#scrollBuilden').change(function () {
        var value = $(this).val();
        $('#ButtonFind').click(function () {
            var url = value;
            window.location.href = url;
        });
    });

});

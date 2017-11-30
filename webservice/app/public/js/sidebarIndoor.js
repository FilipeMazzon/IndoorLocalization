$(document).ready(function () {
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
    });
    $('ul.tabs').tabs('select_tab', 'tabs-swipe-demo');
    <!-- SideNav Indoor-->
    html= "";
    html+=
        "<a href=\"#!user\"><img class=\"circle\" src=\"images/perfil.jpg\"></a>"  +
        " <a href=\"#!name\"><span class=\"white-text name\">Carlos Ynoguti</span></a>"+
        "<a href=\"#!email\"><span class=\"white-text email\">ynoguti@inatel.br</span></a>" ;
        /* "</div>"  +
        "</li>"+
        "<li><a href=\"/\">Main Home<i class=\"material-icons\">home</i></a></li>" +
        "<li><a href=\"/indoor_home\">Home<i class=\"material-icons\">home</i></a></li>" +
        "<li><a href=\"/indoor_team\">Team<i class=\"material-icons\">group</i></a></li>" +
         " <li class=\"\">" +
        "<ul class=\"collapsible collapsible-accordion\">"+
        "  <li>"+
        "<a class=\"collapsible-header\">cadastro<i class=\"material-icons\">add</i></a>"+
        "<div class=\"collapsible-body\">"+
        " <ul>"   +
        "<li><a href=\"/indoor_cadastro_beacon\">beacon</a></li>"+
        "<li><a href=\"/indoor_cadastro_scanner\">scanner</a></li>"+
        "</ul></div></li></ul></li>"+
        "<ul class=\"collapsible collapsible-accordion\">"+
         "<li>"+
        "<a class=\"collapsible-header\">Pesquisar<i class=\"material-icons\">search</i></a>"+
        "<div class=\"collapsible-body\">"+
        "<ul>"+
        " <li><a href=\"/indoor_search_builden\">Predios</a></li>"+
        "<li><a href=\"/indoor_search_person\">Pessoas</a></li>"+
        "</ul></div></li></ul>"+
        " <li>"+
        "<div class=\"divider\"></div>"+
        " </li>"+
        "<li><a href=\"#!\">Configurações<i class=\"material-icons\">build</i></a></li>"+
        " </ul>" ;*/

});

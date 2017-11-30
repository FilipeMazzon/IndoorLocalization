module.exports.find = function(application,req,res){
    res.render("indoor/search/scanner");
};

module.exports.action = function (application, req, res) {
    var pesquisa = req.body;
    console.log(pesquisa);
    req.assert('scanner', 'scanner é obrigatório').equals("0");
    var erros = req.validationErrors();
    if (erros) {
        res.render("indoor/search/scanner", {validacao: erros, dado: pesquisa});
        return;
    }
    res.redirect("/indoor_search_scanner_"+pesquisa.scanner);
};

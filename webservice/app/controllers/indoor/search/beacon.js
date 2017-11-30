module.exports.find = function (application, req, res) {
    res.render("indoor/search/beacon");
};
module.exports.action = function (application, req, res) {
    var pesquisa = req.body;
    console.log(pesquisa);
    req.assert('beacon', 'beacons é obrigatório').notEmpty();
    var erros = req.validationErrors();
    if (erros) {
        res.render("indoor/search/beacon", {validacao: erros, dados: dados});
        return;
    }
    res.redirect("/indoor_search_beacon_"+pesquisa.beacon);
};

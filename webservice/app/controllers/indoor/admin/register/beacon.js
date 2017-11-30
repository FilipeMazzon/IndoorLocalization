module.exports.registerBeacon = function (application, req, res) {
    res.render("indoor/admin/register/beacon", {validacao: {}, dados: {}});
};
module.exports.finishRegisterBeacon = function (application, req, res) {
    var dados = req.body;
    console.log("chegou aqui");
    req.assert('id', 'id é obrigatório').notEmpty();
    req.assert('addr', 'addr é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("indoor/admin/register/scanner", {validacao: erros, dados: dados});
        return;
    }
};

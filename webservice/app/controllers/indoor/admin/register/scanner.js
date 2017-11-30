module.exports.registerScanner = function (application, req, res) {
    res.render("indoor/admin/register/scanner", {validacao: {}, dados: {}});
};
module.exports.finishRegisterScanner = function (application, req, res) {
    var dados = req.body;
    console.log("chegou aqui");
    req.assert('id', 'id é obrigatório').notEmpty();
    req.assert('addr', 'addr é obrigatório').notEmpty();
    req.assert('x','coordenada de imagem obrigatoria').notEmpty();
    var erros = req.validationErrors();

    if (erros) {
        res.render("indoor/admin/register/scanner", {validacao: erros, dados: dados});
        return;
    }
    res.render("indoor/admin/register/scanner", {validacao: {}, dados: {}});
};

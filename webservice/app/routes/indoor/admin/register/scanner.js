'use strict';
module.exports = function (application) {
    application.get('/indoor_cadastro_scanner', function (req, res) {
        application.app.controllers.indoor.admin.register.scanner.registerScanner(application, req, res);
    });
    application.post('/indoor_finalizar_cadastro_scanner',function (req,res) {
        application.app.controllers.indoor.admin.register.scanner.finishRegisterScanner(application, req, res);
    });
};

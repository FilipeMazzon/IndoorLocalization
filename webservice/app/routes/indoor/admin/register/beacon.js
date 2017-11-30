'use strict';
module.exports = function (application) {
    application.get('/indoor_cadastro_beacon', function (req, res) {
        application.app.controllers.indoor.admin.register.beacon.registerBeacon(application, req, res);
    });
    application.post('/indoor_finalizar_cadastro_beacon', function (req, res) {
        application.app.controllers.indoor.admin.register.beacon.finishRegisterBeacon(application, req, res);
    });
};

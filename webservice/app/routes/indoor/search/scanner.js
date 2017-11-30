'use strict';
module.exports = function (application) {
    application.get('/indoor_search_builden', function (req, res) {
        application.app.controllers.indoor.search.scanner.find(application, req, res);
    });
    application.post('/indoor_procurar_scanner', function (req, res) {
        application.app.controllers.indoor.search.scanner.action(application, req, res);
    });
};

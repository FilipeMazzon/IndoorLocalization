'use strict';
module.exports = function (application) {
    application.get('/indoor_search_person', function (req, res) {
        application.app.controllers.indoor.search.beacon.find(application, req, res);
    });
    application.post('/indoor_procurar_beacon', function (req, res) {
        application.app.controllers.indoor.search.beacon.action(application, req, res);
    });
};

'use strict';
module.exports = function (application) {
    application.get('/indoor_search_beacon_predio2_2', function (req, res) {
        application.app.controllers.indoor.search.scanner.predio2_1.find(application, req, res);
    });
};

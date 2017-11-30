'use strict';
module.exports = function (application) {
    application.get('/indoor_search_beacon_predio2-1', function (req, res) {
        application.app.controllers.indoor.search.beacon.find(application, req, res);
    });
};

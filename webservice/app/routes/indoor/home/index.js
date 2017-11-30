'use strict';
module.exports = function (application) {
    application.get('/indoor_home', function (req, res) {
        application.app.controllers.indoor.home.index.load(application, req, res);
    })
};

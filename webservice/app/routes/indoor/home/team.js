'use strict';
module.exports = function (application) {
    application.get('/indoor_team', function (req, res) {
        application.app.controllers.indoor.home.team.show(application, req, res);
    })
};

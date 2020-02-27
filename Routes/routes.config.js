const config = require('../environment/env.config');

module.exports = function (app) {


    const EventController = require('../Controllers/events.controller');
    const port = config.port;

    app.route('/events')
        .get(EventController.getList)
        .post(EventController.insert);

    app.route('/events/:day')
        .get(EventController.findByDay);

};

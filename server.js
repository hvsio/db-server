const config = require('./environment/env.config'),
    express = require('express'),
    app = express(),
    port = config.port,
    mongoose = require('mongoose'),
    EventModel = require("./models/event.model"),
    StoryModel = require("./models/story.model"),
    Goal = require("./models/goal.model"),
    User = require("./models/user.model"),
    bodyParser = require('body-parser'),
    monk = require('monk');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/events', { useNewUrlParser: true }).
    catch(error => console.log(error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./Routes/routes.config'); //importing route
routes(app); //register the route

app.listen(port);
console.log("Listening on port: " + port);

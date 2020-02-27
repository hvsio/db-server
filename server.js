const config = require('./environment/env.config'),
    express = require('express'),
    app = express(),
    port = config.port,
    mongoose = require('mongoose'),
    EventModel = require("./Models/events.model"),
    bodyParser = require('body-parser'),
    monk = require('monk');

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// });

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


// async function getArray() {
//         dbo.listCollections().toArray().then((docs) => {
//             console.log(docs);
//         }).catch((err) => {
//             console.log(err);
//         });
// }
//
// async function checkStatistics() {
//         dbo.stats((err, stats) => {
//             if (err) throw err;
//             console.log(stats);
//         })
// }
//
// async function addEvent(name, start, end, category, day) {
//     var obj = {
//         name: name,
//         start: start,
//         end: end,
//         category: category,
//         day: day
//     };
//         dbo.collection("events").insertOne(obj, function (err, res) {
//             if (err) throw err;
//             console.log('First obj inserted');
//
//         });
// }
//
// async function getEventsFromDay(day) {
//         query = {day: day};
//         dbo.collection("events").find(query).toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         })
// }
//
// async function getEventsFromCategory(category) {
//         query = {category: category};
//         dbo.collection("events").find(query).toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         })
// }
//
// async function deleteEvents(event_id) {
//         query = {_id: event_id};
//         dbo.collection("events")._deleteOne(query, function (err, obj) {
//             if (err) throw err;
//             console.log("1 document deleted: " + event_id);
//         })
// }
//
// async function deleteMany(day) {
//         query = {day: day};
//         dbo.collection("events").deleteMany(query, function (err, obj) {
//             if (err) throw err;
//             console.log(obj + " entries deleted");
//         })
// }

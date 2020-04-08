const mongoose = require('mongoose');
    Event = mongoose.model('Events');


exports.getEvents = function(req,res) {
     Event.find({}, function(err, event) {
         if (err)
             res.send(err);
         else
             res.json(event);
     });
};


exports.createOne = function(req, res) {
    const new_event = new Event(req.body);
    new_event.save(function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    })
};

exports.findByDay = function (req, res) {
    Event.find({day: req.params.day}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};

exports.deleteEvent = function (req, res) {
    Event.findOneAndRemove({_id: req.params.id}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.send(`Event deleted`);
    });
};

exports.updateEvent = function (req, res) {
    Event.findOneAndUpdate({day: req.params.day}, req.body, {new: true}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};





// const EventModel = require('../models/events.model');
//
// exports.insert = (req,res) => {
//     EventModel.createEvent(req.body).then((result) => {
//         res.status(201).send({id: result._id});
//     });
// };
//
// exports.getByDay = (req, res) => {
//     EventsModel.findByDay(req.params.day).then((result) => {
//         res.status(200).send(result);
//     })
// };
//
// exports.getList = (req, res) => {
//     EventModel.getList().then((result) => {
//         res.status(200).send(result);
//     })
// };

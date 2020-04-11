const mongoose = require('mongoose');
    Event = mongoose.model('Events');


exports.getEvents = async function(req,res) {
     try {
         await Event.find({}, function (err, event) {
             if (err)
                 console.log(err);
             else
                 res.json(event);
         });
     } catch (e) {
         console.error(e)
         res.status(400).end()
     }
};


exports.createOne = async function(req, res) {
    const new_event = new Event(req.body);
    try {
        await new_event.save(function (err, event) {
            if (err)
                console.log(err);
            else
            res.json(event);
        }) } catch (e) {
            console.error(e)
            res.status(400).end()
        }
};

exports.findByDay = async function (req, res) {
    try {
        await Event.find({day: req.params.day}, function(err, event) {
            if (err)
                console.log(err);
            else
                res.json(event);
        })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
};

exports.deleteEvent = async function (req, res) {
    try {
        await Event.findOneAndRemove({_id: req.params.id}, function(err, event) {
            if (err)
                console.log(err);
            else
                res.send(`Event deleted`);
        });
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
};

exports.updateEvent = async function (req, res) {
    try {
        await Event.findOneAndUpdate({day: req.params.day}, req.body, {new: true}, function(err, event) {
            if (err)
                console.log(err);
            else
                res.json(event);
        });
    } catch (e) {
        console.error(e)
        res.send(400).end()
    }
};

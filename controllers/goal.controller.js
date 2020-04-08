const mongoose = require('mongoose');
Goal = mongoose.model('Goal');


exports.getGoals = function(req,res) {
    Goal.find({}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};


exports.createGoal = function(req, res) {
    const new_goal = new Goal(req.body);
     new_goal.save(function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    })
};

exports.findGoal = function (req, res) {
    Goal.find({day: req.params.day}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};

exports.deleteGoal = function (req, res) {
    Goal.findOneAndRemove({_id: req.params.id}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.send(`Event deleted`);
    });
};

exports.updateGoal = function (req, res) {
    Goal.findOneAndUpdate({day: req.params.day}, req.body, {new: true}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};

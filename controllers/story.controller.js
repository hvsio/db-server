const mongoose = require('mongoose');
Story = mongoose.model('Story');


exports.getStories = function(req,res) {
    Story.find({}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};


exports.createStory = function(req, res) {
    const new_story = new Story(req.body);
    new_story.save(function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    })
};

exports.findStory = function (req, res) {
    Story.find({day: req.params.day}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};

exports.deleteStory = function (req, res) {
    Story.findOneAndRemove({_id: req.params.id}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.send(`Event deleted`);
    });
};

exports.updateStory = function (req, res) {
    Story.findOneAndUpdate({day: req.params.day}, req.body, {new: true}, function(err, event) {
        if (err)
            res.send(err);
        else
            res.json(event);
    });
};

const mongoose = require('mongoose');
Story = mongoose.model('Story');


exports.getStories = async function (req, res) {
    try {
        await Story.find({}, function (err, story) {
            if (err)
                console.log(err)
        })
            .limit(10)
            .lean()
            .exec()
        res.status(200).json({data: Story})
    } catch (e) {
        console.error(e)
        res.status(400).send("cannot access stories").end()
    }
};


exports.createStory = async function (req, res) {
    const new_story = new Story(req.body);
    try {
        await new_story.save(function (err, story) {
            if (err)
                console.log(err)
            else
                res.status(200).json({data: story})
        })
            .lean()
            .exec()
    } catch (e) {
        console.error(e)
        res.status(400).send("cannot create a story").end()
    }
};

exports.findStory = async function (req, res) {
    try {
        await Story.find({day: req.params.day}, function (err, story) {
            if (err)
                console.log(err);
            else
                res.status(200).json({data: story})
        })
    } catch (e) {
        console.error(e)
        res.status(400).send("cannot find a story").end()
    }
};

exports.deleteStory = async function (req, res) {
    try {
        await Story.findOneAndRemove({_id: req.params.id}, function (err, story) {
            if (err)
                res.send(err);
            else
                res.send(`Event deleted`);
        })
            .lean()
            .exec()
    } catch (e) {
        console.error(e)
        res.status(400).send("cannot delete a story").end()
    }
};

exports.updateStory = async function (req, res) {
    try {
        await Story.findOneAndUpdate({day: req.params.day}, req.body, {new: true}, function (err, story) {
            if (err)
                console.log(err);
            else
                res.status(200).json(story)
        });
    } catch (e) {
    console.error(e)
    res.status(400).send("cannot update a story").end()
}
};

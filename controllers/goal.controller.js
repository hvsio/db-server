const mongoose = require('mongoose'),
Goal = mongoose.model('Goal');


exports.getGoals = async function(req,res) {
    try {
        await Goal.find({}, function(err, goal) {
            if (err)
                console.log(err);
            else
                res.status(200).json(goal)
        });
    } catch (e) {
    console.error(e)
    res.status(400).send("cannot access goals").end()
}
};


exports.createGoal = async function(req, res) {
    try {
        const new_goal = new Goal(req.body);
        await new_goal.save(function (err, goal) {
        if (err)
            console.log(err);
        else
        res.json(goal);
    }) } catch (e) {
        console.error(e)
        res.status(400).send("cannot create a goal").end()
    }
};

exports.findGoal = async function (req, res) {
    try {
        await Goal.find({day: req.params.day}, function(err, goal) {
            if (err)
                res.send(err);
            else
                res.json(goal);
        });
    } catch (e) {
        console.error(e)
        res.status(400).status("cannot find a goal").end()
    }
};

exports.deleteGoal = async function (req, res) {
    try {
        await Goal.findOneAndRemove({_id: req.params.id}, function(err, goal) {
            if (err)
                res.send(err);
            else
                res.send(`Event deleted`);
        });
    } catch (e) {
        console.error(e)
        res.status(400).send("Cannot delete a goal")
    }
};

exports.updateGoal = async function (req, res) {
    try {
        await Goal.findOneAndUpdate({day: req.params.day}, req.body, {new: true}, function(err, goal) {
            if (err)
                res.send(err);
            else
                res.json(goal);
        });
    } catch (e) {
        console.error(e)
        res.status(400).send("cannot update a goal").end()
    }
};

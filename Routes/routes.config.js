module.exports = function (app) {


    const EventController = require('../controllers/event.controller');
    const GoalController = require('../controllers/goal.controller');
    const StoryController = require('../controllers/story.controller');

// events routes

    app.route('/events')
        .get(EventController.getEvents)
        .post(EventController.createOne)

    app.route('/events/:day')
        .get(EventController.findByDay)
        .delete(EventController.deleteEvent)
        .put(EventController.updateEvent)

// goals routes

    app.route('/goals')
        .get(GoalController.getGoals)
        .post(GoalController.createGoal)

    app.route('/goals/:day')
        .get(GoalController.findGoal)
        .delete(GoalController.deleteGoal)
        .put(GoalController.updateGoal)

// stories routes

    app.route('/stories')
        .get(StoryController.getStories)
        .post(StoryController.createStory);

    app.route('/stories/:id')
        .get(StoryController.findStory)
        .delete(StoryController.deleteStory)
        .put(StoryController.updateStory)

};

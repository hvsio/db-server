const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalsSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    day: {type: String, required: true},
})

module.exports = mongoose.model('Goal', GoalsSchema);
const Goal = module.exports;

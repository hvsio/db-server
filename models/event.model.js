const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    name: {type: String, required: true},
    start: {type: String, required: true},
    end: {type: String, required: true},
    category: {type: String, required: false},
    day: {type: String, required: false},
});

module.exports = mongoose.model('Events', EventsSchema);
const Event = module.exports;


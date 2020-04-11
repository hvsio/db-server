const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const EventsSchema = new Schema({
    name: {type: String, required: true},
    start: {type: String, required: true},
    end: {type: String, required: true},
    category: {type: String, required: false},
    day: {type: String, required: false},
}, opts);

EventsSchema.pre('save', function() {
    console.log(' Pre-saving middlewear ')
})

EventsSchema.post('save', function () {
    console.log(' Post-saving middlewear')
})

EventsSchema.virtual('creator')
    .get(function () {
        console.log('in virtual')
        return 'Lucy'
    })

EventsSchema.index({
    name: 1,
    day: 1
}, {unique: true})

module.exports = mongoose.model('Events', EventsSchema);
const Event = module.exports;


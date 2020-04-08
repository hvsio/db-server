const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoriesSchema = new Schema({
    title: {type: String, required: true},
    notes: {type: String, required: false},
    day: {type: String, required: true}
});

module.exports = mongoose.model('Story', StoriesSchema);
const Story = module.exports;


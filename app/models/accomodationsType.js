const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accomodationsTypeSchema = new Schema({
    type: String
});

const accomodationsType = mongoose.model('accomodationsType', accomodationsTypeSchema);
module.exports = accomodationsType;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accomodationsTypeSchema = new Schema({
    type: String,
    accomodation: [{
        type: Schema.Types.ObjectId,
        ref: 'accomodation'
    }],
});

const accomodationsType = mongoose.model('accomodationsType', accomodationsTypeSchema);
module.exports = accomodationsType;
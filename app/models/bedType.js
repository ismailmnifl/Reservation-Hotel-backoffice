const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bedTypeSchema = new Schema({
    type: String,
    accomodation: [{
        type: Schema.Types.ObjectId,
        ref: 'accomodation'
    }],
});

const bedType = mongoose.model('bedType', bedTypeSchema);
module.exports = bedType;
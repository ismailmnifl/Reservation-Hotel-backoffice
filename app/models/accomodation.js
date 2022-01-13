const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accomodationSchema = new Schema({
    referance: String,
    accomodationsType: {
        type: Schema.Types.ObjectId,
        ref: 'accomodationsType'
    },
    bedType: {
        type: Schema.Types.ObjectId,
        ref: 'bedType'
    }
});

const Accomodation = mongoose.model('accomodation', accomodationSchema);
module.exports = Accomodation;
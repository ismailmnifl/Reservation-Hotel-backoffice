const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bedTypeSchema = new Schema({
    type: String
});

const bedType = mongoose.model('bedType', bedTypeSchema);
module.exports = bedType;
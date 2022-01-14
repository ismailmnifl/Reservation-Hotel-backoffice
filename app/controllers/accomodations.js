const mongoose = require('mongoose');
const Accomodation = require('../models/accomodation');
const BedType = require('../models/bedType');
const AccomodationType = require('../models/accomodationsType');


module.exports = {
    getAllAccomodation: async(req, res, next) => {
        const results = await Accomodation.find({}).populate('accomodationsType').populate('bedType');
        res.status(200).json(results);
    },
    newAccomodation: async(req, res, next) => {
        try {
            const { bedTypeId, accomodationTypeId } = req.params;

            console.log(bedTypeId);
            console.log(accomodationTypeId);
            const newAccomodation = new Accomodation(req.body);
            const bed = await BedType.findById(bedTypeId);
            const accomType = await AccomodationType.findById(accomodationTypeId);
            newAccomodation.accomodationsType = accomType;
            newAccomodation.bedType = bed;
            newAccomodation.save();
            bed.accomodation.push(newAccomodation);
            await bed.save();
            accomType.accomodation.push(newAccomodation);
            await accomType.save();

            res.status(200).json(newAccomodation);




        } catch (error) {
            next(error);
        }
    },

    getSingleAccomodation: async(req, res, next) => {

    },
    deleteAccomodation: async(req, res, next) => {

    },
    updateAccomodation: async(req, res, next) => {

    }
}
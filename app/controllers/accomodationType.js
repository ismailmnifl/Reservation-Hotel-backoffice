const mongoose = require('mongoose');
const AccomodationType = require('../models/accomodationsType');


module.exports = {
    getAllAccomodationType: async(req, res, next) => {
        try {
            const results = await AccomodationType.find({});
            res.status(200).json(results);
        } catch (error) {
            next(error);
        }
    },
    newAccomodationType: async(req, res, next) => {
        try {
            const newAccomType = new AccomodationType(req.body);
            console.log(newAccomType);
            const results = await newAccomType.save();
            res.status(200).json(results);

        } catch (error) {
            next(error);
        }
    },
    deleteAccomodationType: async(req, res, next) => {
        try {
            const { accomodationsTypeId } = req.params;
            await AccomodationType.findByIdAndDelete(accomodationsTypeId);
            res.status(200).json({
                message: "the accomodation type was deleted succesfully"
            });

        } catch (error) {
            next(error);
        }
    },
    updateAccomodationType: async(req, res, next) => {
        try {

            const { accomodationsTypeId } = req.params;
            const newAccomodationType = req.body;
            const results = await AccomodationType.findByIdAndUpdate(accomodationsTypeId, newAccomodationType, { new: true });
            res.status(200).json(results);
        } catch (error) {
            next(error);
        }
    }
}
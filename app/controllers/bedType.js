const mongoose = require('mongoose');
const BedType = require('../models/bedType');

module.exports = {
    getAllbedType: async(req, res, next) => {
        try {
            const allBedTypes = await BedType.find({});
            res.status(200).json(allBedTypes);

        } catch (error) {
            next(error);
        }
    },
    newbedType: async(req, res, next) => {
        try {
            const newBedType = new BedType(req.body);
            await newBedType.save();
            res.status(201).json(newBedType);

        } catch (error) {
            next(error);
        }
    },

    getSinglebedType: async(req, res, next) => {
        try {
            const { bedTypeId } = req.params;
            const bedType = await BedType.findById(bedTypeId);
            res.status(200).json(bedType);

        } catch (error) {
            next(error);
        }
    },
    deletebedType: async(req, res, next) => {
        try {
            const { bedTypeId } = req.params;
            await BedType.findByIdAndDelete(bedTypeId);
            res.status(200).json({
                message: "the bed type was deleted successfuly !"
            });

        } catch (error) {
            next(error);
        }
    },
    updatebedType: async(req, res, next) => {
        try {
            const { bedTypeId } = req.params;
            const newBedType = req.body;
            const result = await BedType.findByIdAndUpdate(bedTypeId, newBedType, { new: true });
            res.status(200).json(result);


        } catch (error) {
            next(error);
        }
    }
}
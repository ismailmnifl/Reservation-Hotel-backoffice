const mongoose = require('mongoose');
const Accomodation = require('../models/accomodation');


module.exports = {
    getAllAccomodation: async(req, res, next) => {

    },
    newAccomodation: async(req, res, next) => {
        try {
            const newAccomodation = new Accomodation(req.body);
            await newAccomodation.saveasync();
            res.status(201).json(newAccomodation);

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
const express = require('express');
const router = express.Router();

const accomController = require('../app/controllers/accomodations');


router.route('/')
    .get(accomController.getAllAccomodation)
    .get(accomController.getSingleAccomodation)
    .post(accomController.newAccomodation);


router.route('/:accomodationId')
    .patch(accomController.updateAccomodation)
    .delete(accomController.deleteAccomodation);


module.exports = router;
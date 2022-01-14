const express = require('express');
const router = express.Router();

const accomController = require('../app/controllers/accomodations');


router.route('/')
    .get(accomController.getAllAccomodation)
    .get(accomController.getSingleAccomodation)

router.route('/:accomodationTypeId/:bedTypeId')
    .post(accomController.newAccomodation);

router.route('/:accomodationId')
    .patch(accomController.updateAccomodation)
    .delete(accomController.deleteAccomodation);


module.exports = router;
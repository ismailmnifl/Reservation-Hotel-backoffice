const express = require('express');
const router = express.Router();

const accomdationTypethController = require('../app/controllers/accomodationType');


router.route('/')
    .get(accomdationTypethController.getAllAccomodationType)
    .post(accomdationTypethController.newAccomodationType);



router.route('/:accomodationsTypeId')
    .delete(accomdationTypethController.deleteAccomodationType)
    .patch(accomdationTypethController.updateAccomodationType);


module.exports = router;
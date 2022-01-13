const express = require('express');
const router = express.Router();

const bedTypeController = require('../app/controllers/bedType');


router.route('/')
    .get(bedTypeController.getAllbedType)
    .post(bedTypeController.newbedType);



router.route('/:bedTypeId')
    .delete(bedTypeController.deletebedType)
    .get(bedTypeController.getSinglebedType)
    .patch(bedTypeController.updatebedType)

module.exports = router;
const express = require('express');
const placeOrder = require('../controllers/place-order');
const viewOrder = require('../controllers/view-order');
const viewOrders = require('../controllers/view-orders');
const removeOrder = require('../controllers/cancel-order');
const updateOrder = require('../controllers/update-order');
const getTotalAmount = require('../controllers/total-amount');
const agregateAmount = require('../controllers/total-aggregate');
const validate = require('express-validation');
const validation = require('../validation/validation');
const router = express.Router();

router.post('/api/placeorder' , placeOrder); //validate(validation)
router.get('/vieworders' , viewOrders);
 router.post('/api/vieworder' , viewOrder);
router.delete('/api/cancelorder' , removeOrder);
router.put('/api/updatevalue' , updateOrder);
router.get('/api/gettotalamount' , getTotalAmount)

router.post('/api/agregateamount' , agregateAmount);

module.exports = router;
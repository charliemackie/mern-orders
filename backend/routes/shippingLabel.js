// endpoint to perform CRUD operations
const router = require('express').Router();
const getOrderInfo = require("../callbacks/shippingLabelCallback");
const shippoAPI = require("../callbacks/shippoCallback");


// get a specific order 
router.route('/shippo/:order').get((req, res) => {
    const order = req.params.order;
    function shippoReturn(order,shipment) {
        console.log(shipment);
        res.send(shipment);
    }
    shippoAPI(shippoReturn);
});

//get up to date shipping label
router.route('/url/:id').get((req, res) => {
    const id = req.params.id;

    function getURL(order) {
        res.redirect(order['SHIPPING_URL']);
    }

    getOrderInfo(id, getURL);
});


module.exports = router;
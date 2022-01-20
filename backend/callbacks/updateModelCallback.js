let Order = require('../models/order.model');

function updateShippingLabelByID(id, shippingUrl, callback) {
    const query = { _id: id };
    Order.findOneAndUpdate(query, { 'SHIPPING_URL': shippingUrl })
        .then(order => {
            callback(order)
        }
        ).catch(err => callback(err));
}

module.exports = updateShippingLabelByID;
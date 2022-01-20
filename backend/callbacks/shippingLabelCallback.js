let Order = require('../models/order.model');
let UpdatedOrder = require('../models/updatedOrder.model');

function getOrderInfo(id, callback) {
    UpdatedOrder.findById(id)
      .then(order => {
        callback(order)
      }
      ).catch(err => callback(err));
}

//getOrderInfo("61e094bb3d454d4fc7085f14")
module.exports = getOrderInfo;
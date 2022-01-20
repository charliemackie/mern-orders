function shippoAPI(order,callback) {
    var shippo = require('shippo')('shippo_test_c4e7de0b93632f67519a55b26e5b796a04998320');

    var addressFrom  = {
        "name": "Frate",
        "street1": "180 St George St",
        "city": "London",
        "state": "ON",
        "zip": "N6A 3A4",
        "country": "CA"
    };
    
    var addressTo = {
        "name": "Sam Weller",
        "street1": "65 Loyalist Road",
        "city": "Toronto",
        "state": "ON",
        "zip": "M9A 3P2",
        "country": "CA"
    };
    
    var parcel = {
        "length": "5",
        "width": "5",
        "height": "5",
        "distance_unit": "in",
        "weight": "2",
        "mass_unit": "lb"
    };
    
    shippo.shipment.create({
        "address_from": addressFrom,
        "address_to": addressTo,
        "parcels": [parcel],
        "async": false
    }, function(err, shipment){
        callback(shipment)
    });
}

module.exports = shippoAPI;
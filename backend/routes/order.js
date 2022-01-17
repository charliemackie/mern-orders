// endpoint to perform CRUD operations
const router = require('express').Router();
let Order = require('../models/order.model');

// get all orders
router.route('/').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add a new order
router.route('/add').post((req, res) => {
  const Name = req.body.Name;
  const Address = req.body.Address;
  const Item_Name = req.body.Item_Name;
  const Item_Price = req.body.Item_Price;
  const Item_Size = req.body.Item_Size;

  const newOrder = new Order({
      Name,
      Address,
      Item_Name,
      Item_Price,
      Item_Size
  });

  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get a specific order 
router.route('/:id').get((req, res) => {
  Order.findById(req.params.id)
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
  console.log(req.params.id)
});

module.exports = router;
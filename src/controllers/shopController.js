const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    item_id: (req, res) => res.send('Route for find and retrieve a product from an ID'),
    item_id_add: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.send('Route for Cart View'),
    cart_: (req, res) => res.send('Route for got to checkout page')
}

module.exports = shopControllers;
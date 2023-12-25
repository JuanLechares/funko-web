const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for create a product'),
    create_: (req, res) => res.send('Route for got to checkout page??'),
    edit_id: (req, res) => res.send('Route for edit a product from an ID'),
    edit_id_: (req, res) => res.send('Route for put??'),
    delete_id: (req, res) => res.send('Route for delete a product from an ID')
}

module.exports = adminControllers;
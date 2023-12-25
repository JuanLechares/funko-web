const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.create_);
router.get('/edit/:id', adminControllers.edit_id);
router.put('/edit/:id', adminControllers.edit_id_);
router.get('/delete/:id', adminControllers.delete_id);

module.exports = router;
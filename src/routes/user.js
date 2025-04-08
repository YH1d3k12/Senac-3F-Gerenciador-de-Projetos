const express = require('express');
const UserController = require('../controllers/user');

const controller = new UserController();
const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.read);
router.get('/:id', controller.readOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
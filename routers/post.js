const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller.js')
router.post('/create' , postController.create);
router.get('/show/:id'  ,postController.show);
module.exports = router;
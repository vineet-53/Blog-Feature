const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index-controller.js');
router.use('/posts', require('./post.js'));
router.get('/compose', indexController.compose);
router.get('/contact', (req, res) => {
  res.render('contact');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/', indexController.home);

module.exports = router;

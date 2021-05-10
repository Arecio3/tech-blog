const router = require('express').Router();
const { User, Comment, Blog } = require('../models');


router.get('/', (req, res) => {
    res.render('main')
  });
  // register.handlebars
  router.get('/register', (req, res) => {
    res.render('signUp')
  });
  // login.handlebars
  module.exports = router;

  
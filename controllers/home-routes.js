const router = require('express').Router();
const { User, Comment, Blog } = require('../models');


router.get('/', async (req, res) => {
    try {
    const blogData = await Blog.findAll()
    const blogs = blogData.map((blog) => 
        blog.get({ plain: true })
    );
    res.render('home', {
        blogs
    })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
  });

  module.exports = router;
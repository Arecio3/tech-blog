const router = require('express').Router();
const { log } = require('handlebars');
const { User, Comment, Blog } = require('../models');


router.get('/', async (req, res) => {
    try {
    const blogData = await Blog.findAll({
      include: [User]
    })
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

  router.get('/blogpost/:id', async (req, res) => {
      try {
          const postData = await Blog.findByPk(req.params.id, {
              include: [
                  {
                      model: Comment,
                  },
              ],
          });
          console.log("Hey dummy");
          console.log(postData);
          const onePost = postData.get({ plain: true });
          console.log({ onePost, loggedIn: req.session.loggedIn})
          res.render('blogpost', { onePost, loggedIn: req.session.loggedIn})
      } catch (err) {
          console.log(err);
          res.status(500).json(err)
      }
  })

  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


  router.get('/dashboard',  (req, res) => {
    res.render('dashboard')
  });

  // Add comment to blog
  router.post('/newcomment', async(req, res) => {
      console.log('Fatality');
      try {
          console.log(req.body);
          console.log('Caught a body');
          const comment = await Comment.create({
              ...req.body,
              user_id: req.session.user_id
          });
          res.status(200).json(comment)
      } catch (err) {
          res.status(400).json(err)
      }
  })

  router.get('/createpost', async (req, res) => {
      res.render('createpost', {loggedIn: req.session.loggedIn, user_id: req.session.user})
  })

  router.post('/newpost', async (req, res) => {
    console.log('You suck')
    try {
      console.log(req.body);
      console.log("There is no place I know but a world of OSHA violations")
      const post = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(post)
    } catch (err) {
      res.status(400).json(err);
    }
  })

  module.exports = router;
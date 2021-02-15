var express = require('express');
var router = express.Router();

let firstname=null;
let lastname=null;
let contact =null;
let email =null;
let message =null;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { 
    title: 'Home',
     firstname:firstname,
     lastname:lastname,
     contact :contact,
     email :email,
     message :message
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home', { 
     title: 'Home',
     firstname:firstname,
     lastname:lastname,
     contact :contact,
     email :email,
     message :message
  });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About'});
});

/* GET Products page. */
router.get('/project', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact'});
});


/* POST Contact Us page. */
router.post('/contact', function(req, res, next) {
  firstname = req.body.fname;
  lastname = req.body.lname;
  contact = req.body.contact;
  email = req.body.email;
  message = req.body.msg;
  res.redirect('/home');
});

module.exports = router;

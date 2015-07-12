var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/join', function(req, res, next) {
  res.render('join-form', {title: 'Express'});
});

router.post('/join', function(req, res, next) {
  res.render('join-result', {
    username: req.body.name
    , useremail: req.body.email
    , title: 'Express'

  })
})

module.exports = router;

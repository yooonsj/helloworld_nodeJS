var express = require('express');
var router = express.Router();
var mysqlRepo = require('../databases/mysql/repository');
var mongodbRepo = require('../databases/mongodb/repository');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/join', function(req, res, next) {
  res.render('join-form', {title: 'Express'});
});

router.post('/join', function(req, res, next) {
  /*res.render('join-result', {
    username: req.body.name
    , useremail: req.body.email
    , title: 'Express'

  });*/

  mysqlRepo.hasNameAndEmail(req.body, res);
  // mongodbRepo.insertUser(req.body, res);
})

module.exports = router;

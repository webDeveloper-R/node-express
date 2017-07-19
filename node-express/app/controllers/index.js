'use strict';
// this controller is meant to set up routes from all other controllers
// it also sets up basic express routes

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _extras = require('./extras');

var _extras2 = _interopRequireDefault(_extras);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load models
var Movie = _mongoose2.default.model('Movie');

// create router
var router = (0, _express.Router)();
// load other controllers
router.use('/extras', _extras2.default);

// set basic routes
router.get('/', function (req, res, next) {
  return res.render('index', {
    title: 'node-express'
  });
});
// note that `movies` will likely be empty because the local mongodb is empty.
// you can populate it with example data by downloading it here:
// https://gist.githubusercontent.com/thekelvinliu/152f2c488430be9b6649c963d5a2afea/raw/22d73b73fb653c091d4a5ffe470299d64a0d0fb7/movies
// then navigate to the directory containing the file and run the following:
// $ mongoimport --db test --collection movies movies
router.get('/movies', function (req, res, next) {
  return Movie.find().exec(function (err, movies) {
    return err ? next(err) : res.render('movies', {
      title: 'Movies!',
      movies: movies
    });
  });
});

// export router
exports.default = router;
/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var apiRouter = express.Router();

  apiRouter.get('/', function(req, res) {
    res.send({
      '/api': []
    });
  });

  apiRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  apiRouter.get('/:id', function(req, res) {
    res.send({
      '/api': {
        id: req.params.id
      }
    });
  });

  apiRouter.put('/:id', function(req, res) {
    res.send({
      '/api': {
        id: req.params.id
      }
    });
  });

  apiRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/-api', require('body-parser').json());
  app.use('/api/-api', apiRouter);
};

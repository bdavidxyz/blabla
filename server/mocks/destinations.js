/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var destinationsRouter = express.Router();

  destinationsRouter.get('/', function(req, res) {
    res.send({
      'destinations': [{id:1, point:123}, {id:2, point:465}]
    });
  });

  destinationsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  destinationsRouter.get('/:id', function(req, res) {
    res.send({
      'destinations': {
        id: req.params.id
      }
    });
  });

  destinationsRouter.put('/:id', function(req, res) {
    res.send({
      'destinations': {
        id: req.params.id
      }
    });
  });

  destinationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/destinations', require('body-parser').json());
  app.use('/api/destinations', destinationsRouter);
};

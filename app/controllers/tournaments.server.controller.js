'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors'),
  Tournament = mongoose.model('Tournament'),
  _ = require('lodash');

/**
 * Create a tournament
 */
exports.create = function(req, res) {
  var tournament = new Tournament(req.body);
  tournament.user = req.user;

  tournament.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(tournament);
    }
  });
};

/**
 * Show the current tournament
 */
exports.read = function(req, res) {
  res.jsonp(req.tournament);
};

/**
 * Update a tournament
 */
exports.update = function(req, res) {
  var tournament = req.tournament;

  tournament = _.extend(tournament, req.body);

  tournament.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(tournament);
    }
  });
};

/**
 * Delete an tournament
 */
exports.delete = function(req, res) {
  var tournament = req.tournament;

  tournament.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(tournament);
    }
  });
};

/**
 * List of Tournaments
 */
exports.list = function(req, res) {
  Tournament.find().sort('-created').populate('user', 'displayName').exec(function(err, tournaments) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(tournaments);
    }
  });
};

/**
 * Tournament middleware
 */
exports.tournamentByID = function(req, res, next, id) {
  Tournament.findById(id).populate('user', 'displayName').exec(function(err, tournament) {
    if (err) return next(err);
    if (!tournament) return next(new Error('Failed to load tournament ' + id));
    req.tournament = tournament;
    next();
  });
};

/**
 * Tournament authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  if (_.intersection(req.user.roles,['editor','admin'])) {
      next();
  }
  else{
    return res.status(403).send({
      message: errorHandler.getErrorMessage({code:403})
    });
  }

};

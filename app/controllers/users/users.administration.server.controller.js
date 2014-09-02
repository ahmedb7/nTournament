'use strict';


var _ = require('lodash'),
  errorHandler = require('../errors'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.listAll = function(req,res)
{
  if (_.contains(req.user.roles,'admin')){
      User.find({},function(err,users)
      {
        res.send(users);
      });
    }
  else{
    return res.status(401).send({
      message: errorHandler.getErrorMessage({code:401})
    });
  }
};
exports.read = function(req, res) {
  res.jsonp(req.user);
};

exports.addRole = function(req,res)
{
if (_.contains(req.user.roles,'admin')){
    User.findById(req.body.id,function(err,user)
    {
      user.roles.push(req.body.role);
      user.$update();
    });
  }
else{
  return res.status(401).send({
    message: errorHandler.getErrorMessage({code:401})
  });
}
};

exports.adminUpdate = function(req,res)
{
  // Init Variables
  var user = req.user;
  var message = null;
//if (_.contains(req.user.roles,'admin')){

user = _.extend(user, req.body);
  if (user) {
    user.updated = Date.now();
    user.displayName = user.firstName + ' ' + user.lastName;

    user.save(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      }
      res.jsonp(user);
      });
  } else {
    res.status(400).send({
      message: 'User doesn\'t exist'
    });
  }
//}
//else{
  //return res.status(401).send({
  //  message: errorHandler.getErrorMessage({code:401})
  //});
//}
};

exports.FinduserById = function(req, res, next, id) {
  User.findById(id,function(err,user)
  {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load user ' + id));
    req.user = user;
    next();
  });
};

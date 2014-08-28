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
exports.FinduserById = function(req, res, next, id) {
  if(_.contains(req.user.roles, 'admin'))
    {
  User.findById(id,function(err,user)
  {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load user ' + id));
    req.user = user;
    next();
  });
}
};

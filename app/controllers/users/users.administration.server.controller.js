'use strict';


var _ = require('lodash'),
  errorHandler = require('../errors'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.listAll = function(req,res)
{
  if (req.user.hasAuthorization('admin')){
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

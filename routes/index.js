
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.jade');
};
exports.tournamentList = function (req, res) {
    res.render('tournaments/list.jade');
};
exports.tournamentsDetails = function (req, res) {
    res.render('tournaments/details.jade');
};
exports.newTournament = function(req,res){
  res.render('tournaments/new.jade');
};

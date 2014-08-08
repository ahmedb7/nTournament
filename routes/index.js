
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};
exports.tournaments = function (req, res) {
    res.render('tournaments.html');
};
exports.tournamentsdetails = function (req, res) {
    res.render('tournamentdetails.html');
};
exports.createnewtournament = function(req,res){
  res.render('createnewtournament.html');
};

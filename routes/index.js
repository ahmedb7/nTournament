
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};
exports.tournaments = function (req, res) {
    res.render('partials/tournaments.html');
};
exports.tournamentsdetails = function (req, res) {
    res.render('partials/tournamentdetails.html');
};
exports.createnewtournament = function(req,res){
  res.render('partials/createnewtournament.html');
};

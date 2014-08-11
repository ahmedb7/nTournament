var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var tournamentSchema = new Schema({
  tournamentId:String,
  name:String,
  tournamentthumb:String,
  tournamentHeaderImage:String,
  tournamentCreated: { type: Date, default: Date.now },
  tournamentStartTime:Date,
  registrationStartTime:Date,
  registrationEndTime:Date,
  streamLink: String,
  priority: Number,
  rules: [{
    key:String,
    values:[String]
  }],
  teams:[{
  id:String,
  name:String,
  teamLogoUrl:String,
  members:{
    id:String,
    username:String,
    inGameName:String,
    avatarurl:String
  },
  description:String
  }]

});
module.exports = mongoose.model('TournamentModel',tournamentSchema);

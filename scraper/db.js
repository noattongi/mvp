const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nfl2');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const teamSchema = new mongoose.Schema({
  name: String,
  logoUrl: String,
  players: [{
    name: String,
    capHit: String,
    position: String,
    playerImg: String,
    age: String,
    exp: String,
    signedUntil: String
  }]
})

const Teams = mongoose.model('team', teamSchema);

const save = (obj) => {
  Teams.create(obj, (error) => {
    console.error(error);
  })
  return;
}

module.exports = save;
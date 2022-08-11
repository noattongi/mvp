const express = require('express');
const find = require('../db/index.js');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/teams', (req, res) => {
  find()
  .then((results) => {
    teams = {}
    for (team of results) {
      teams[team.name] = {
        _id: team._id,
        logoUrl: team.logoUrl,
        players: team.players.slice()
      }
    }
    res.send(teams);
  })
})

app.listen(3000, () => {
  console.log(`listening on port 3000`);
})
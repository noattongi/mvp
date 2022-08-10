const axios = require('axios');
const cheerio = require('cheerio');
const save = require('./db.js');

const baseUrl = `https://overthecap.com`;

async function getPlayerData(teamURL) {
  try {
    const players = [];
    const response = await axios.get(teamURL);
    const $ = cheerio.load(response.data);
    const teamData = $('#y2022 > div:nth-child(4) > table > tbody');

    for (let row = 1; row < teamData.children().length + 1; row++) {

      var rowSelector = `#y2022 > div:nth-child(4) > table > tbody > tr:nth-child(${row})`;
      var nameSelector = ` > td:nth-child(1) > a`;
      var capSelector = ` > td:nth-child(11)`;

      if ($(rowSelector).children().length === 1){ continue;}

      var name = $(rowSelector + nameSelector).text();
      var capHit = $(rowSelector + capSelector).text();

      var playerUrl = baseUrl + $(rowSelector + nameSelector).attr("href");

      await axios.get(playerUrl)
      .then((response) => {
        let $$ = cheerio.load(response.data);
        const positionSelector = '#content > div > div.player-description > div > h4 > a';

        return $$(positionSelector).text();
      })
      .then((position) => {
        let player = {
          name: name,
          capHit: capHit,
          position: position
        }
        console.log(player);
        players.push(player);
      })
      .catch((err) => {
        console.error(err);
      })
    }

    return players;
  }
  catch (error) {
    console.error(error);
  }


}

async function getAllTeams() {
  try {
    const response = await axios.get(baseUrl);
    const $ = cheerio.load(response.data);
    const allTeamsSelector = '#site-navigation > div.main-section > div.right-container > ul.teams';

    for (let i = 18; i <= 18; i++) {
      var teamSelector = allTeamsSelector + ` > li:nth-child(${i})`;
      var teamName = $(teamSelector + ` > a:nth-child(2) > span`).text();
      var logoPath = $(teamSelector + ` > a:nth-child(1) > img`).attr("src");

      var data = {
        name: teamName,
        logoUrl: baseUrl + logoPath,
        players: await getPlayerData(baseUrl + $(teamSelector + ` > a:nth-child(1)`).attr("href"))
      }

      save(data);
    }
  }
  catch(err) {
    console.error(err);
  }
}

getAllTeams();

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
        const playerPicSelector = '#content > div > div.player-description > span > img';
        const playerAgeSelector = '#current-contract > div:nth-child(1) > h5:nth-child(1)';
        const playerExpSelector = '#current-contract > div:nth-child(1) > h5:nth-child(3)';
        const agencySelector = '#current-contract > div:nth-child(1) > h5:nth-child(2)'

        var playerImg = baseUrl + $$(playerPicSelector).attr("src")
        var position = $$(positionSelector).text();
        var age = $$(playerAgeSelector).text().slice(-2);
        var exp = $$(playerExpSelector).text().slice(16).trim();
        var signedUntil = $$(agencySelector).text().slice(13);

        return {
          name: name,
          capHit: capHit,
          playerImg: playerImg,
          position: position,
          age: age,
          exp: exp,
          signedUntil: signedUntil
        }
      })
      .then((player) => {
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

    for (let i = 1; i <= 32; i++) {
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

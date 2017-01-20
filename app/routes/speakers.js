let express = require('express');
let router = express.Router();

router.get('/speakers', function(req, res) {
  let info = '';
  let dataFile = req.app.get('appData');
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name};</h2>
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
    <h1>Roux Academy Meetups</h1>
    ${info}
  `);
});

router.get('/speakers/:speakerId', function(req, res) {
  let dataFile = req.app.get('appData');
  let speaker = dataFile.speakers[req.params.speakerId];
  res.send(`
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `);
});

module.exports = router;
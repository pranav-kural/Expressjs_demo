let express = require('express');
let router = express.Router();

router.get('/speakers', function(req, res) {
  let info = '';
  let dataFile = req.app.get('appData');
  dataFile.speakers.forEach(function(item) {
    info += `
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <li>
      <h2>${item.name};</h2>
      <img src="/images/speakers/${item.shortname}_tn.jpg" alt="Picture of ${item.name}" style="height: 300px;">
      <p>${item.summary}</p>
    </li>
    <script src="/reload/reload.js"></script>
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
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="Picture of ${speaker.name}" style="height: 300px;">    
    <p>${speaker.summary}</p>
    <script src="/reload/reload.js"></script>
  `);
});

module.exports = router;
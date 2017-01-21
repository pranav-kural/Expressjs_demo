let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(speaker) {
    pagePhotos = pagePhotos.concat(speaker.artwork);
  });
  res.render('index', {
    pageTitle: 'Home',
    pageID: 'home',
    speakers: pageSpeakers,
    artwork: pagePhotos
  });
});

module.exports = router;
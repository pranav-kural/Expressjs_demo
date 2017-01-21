let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];

  data.speakers.forEach(function(speaker) {
    pagePhotos = pagePhotos.concat(speaker.artwork);
  });
  res.render('index', {
    pageTitle: 'Home',
    pageId: 'home',
    artwork: pagePhotos
  });
});

module.exports = router;
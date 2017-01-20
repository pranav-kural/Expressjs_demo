let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <h1>Welcome</h1>
    <p>Roux Academy Meetups put together artists from all walks of life</p>
  `);
});

module.exports = router;
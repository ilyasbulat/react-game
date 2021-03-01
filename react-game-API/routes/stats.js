var express = require('express');
var router = express.Router();
const Stats = require('../models/stats');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Stats.find({})
    .then((stats) => {
      res.send(stats);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  Stats.create(req.body)
    .then((stats) => {
      res.send(stats);
    })
    .catch(next);
});

module.exports = router;

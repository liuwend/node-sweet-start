var express = require('express');
var router = express.Router();
var fourtJSON = express.fourtJSON;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fourt/index', { title: 'FOURT' });
});

router.post('/generateMers', function(req, res, next) {
  console.log('/fourt/generateMers');
  console.log(JSON.stringify(fourtJSON));

  console.log(req.body.initMers);

  var mers = req.body.initMers.split('\n');
  for(var s in mers) {
    console.log('for in '+s+': ' + mers[s]);
  }

});



module.exports = router;

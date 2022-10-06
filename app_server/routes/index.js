var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main') // bir ust yola cikip controllers klasorune girdik.
/* GET home page. */
router.get('/', ctrlMain.index); //main.js deki fonksiyonu tanimladik   

module.exports = router;

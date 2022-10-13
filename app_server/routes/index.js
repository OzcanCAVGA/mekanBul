var express = require('express');
var router = express.Router();

var ctrlMekanlar = require('../controllers/mekanlar') // bir ust yola cikip controllers klasorune girdik.
var ctrlDigerleri = require('../controllers/digerleri')

/* GET home page. */
router.get('/', ctrlMekanlar.anaSayfa); //main.js deki fonksiyonu tanimladik   
router.get('/mekan', ctrlMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);
module.exports = router;

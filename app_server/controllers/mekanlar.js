
var express = require('express');
var router = express.Router();


const anaSayfa = function (req, res, next) { //index isminde fonksiyon tanimlanmis ve ona 'function' fonksiyon tanimladik

    res.render('anasayfa', { title: 'Anasayfa' });
}

const mekanBilgisi = function (req, res, next) { //index isminde fonksiyon tanimlanmis ve ona 'function' fonksiyon tanimladik

    res.render('mekanBilgisi', { title: 'Mekan Bilgisi' });
}

const yorumEkle = function (req, res, next) { //index isminde fonksiyon tanimlanmis ve ona 'function' fonksiyon tanimladik

    res.render('yorumEkle', { title: 'Yorum Ekle' });
}





module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}




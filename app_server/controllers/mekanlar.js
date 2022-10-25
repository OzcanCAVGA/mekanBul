var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    "baslik": "Anasayfa",
    "sayfaBaslik": {
      "siteAd": "Mekanbul",
      "slogan": "Civardaki Mekanları Keşfet!",
    },
    "mekanlar":[
      {
        "ad":"Safir",
        "adres":"Sdü Batı Kampüsü",
        "puan":"4",
        "mesafe":"2 KM",
        "imkanlar":["Kahveler","Fast-Food"]
      },
      {
        "ad":"Cam Kafe",
        "adres":"Sdü Batı Kampüsü",
        "puan":"2",
        "mesafe":"3 KM",
        "imkanlar":["Öğrenciler","Tavla"]
      }



    ]
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi",
  { "baslik": "Mekan Bilgisi",
   "mekanBaslik":"Safir",
   "mekanDetay":{
      "ad":"Safir",
      "adres":"Sdü Batı Kampüsü",
      "puan":"4",
      "saatler":[
        {
          "gunler":"  Pazartesi-Cuma",
          "acilis":"09:00",
          "kapanis":"17:00",
          "kapali": false
        },
        {
          "gunler":"  Cumartesi-Pazar",
          "kapali": true
        }
      ],
      "imkanlar":["Öğrenciler","Tavla"],
      "koordinatlar":{
        "enlem":"37.829940049883014",
        "boylam":"30.52548581056265"
      },
      "yorumlar":[
        {
          "yorumYapan":"Özcan",
          "puan":"3",
          "tarih":"25 Ekim 2022",
          "yorumMetni":"Sevimli mekan"
        }
      ]

   }





});
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Sayfası" });
};

module.exports = { anaSayfa, mekanBilgisi, yorumEkle };
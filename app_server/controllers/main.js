var express = require('express');
var router = express.Router();


module.exports.index = function (req, res, next) { //index isminde fonksiyon tanimlanmis ve ona 'function' fonksiyon tanimladik

    res.render('index', { title: 'Express' });
};


//module.exports = router;



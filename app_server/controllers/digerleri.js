const hakkinda = function (req, res, next) { //index isminde fonksiyon tanimlanmis ve ona 'function' fonksiyon tanimladik

    res.render('hakkinda', { title: 'Hakkinda Sayfasi' });
}
module.exports={
    hakkinda
}

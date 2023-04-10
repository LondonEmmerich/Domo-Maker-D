const badPage = (req, res) => res.render('badPage');

module.exports.Account = require('./Account.js');
module.exports.Domo = require('./Domo.js');
module.exports.badPage = badPage;

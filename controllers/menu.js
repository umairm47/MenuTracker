const schemas = require('../models/schemas.js');

module.exports = {
    getIndex: function(req,res) {
        res.render('index',{title:'Menu Items'})
    },
    
}
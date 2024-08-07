const mongoose = require('mongoose');
const item = require('./Item');

const MenuSchema = new mongoose.Schema({
    menu:[item],
    restaurant:Object,
});

const Menu = mongoose.model('menu',MenuSchema,'menu');
module.exports = Menu;
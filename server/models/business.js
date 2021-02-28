let mongoose = require('mongoose');

// create model class
let businessModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);
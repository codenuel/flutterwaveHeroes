
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StudentsSchema   = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    sex: String,
    class: String,
    school: String,
    address: String,
    state: String,
    grade: String
});

module.exports = mongoose.model('Students', StudentsSchema);

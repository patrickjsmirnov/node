export {}

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017');
    
const mongoDb = mongoose.connection;
mongoDb.on('error', console.error.bind(console, 'connection error:'));
mongoDb.once('open', () => console.log('connected to mongoDb'));
    
// schema
const { Schema } = mongoose;
const UsersSchema = new Schema({
    name: String,
    email: String,
    hash: String,
    salt: String,
});

// model
var User = mongoose.model('User', UsersSchema);

// methods
const createUser = ({ name, email }) => {
    const user = new User({
        name,
        email,
        hash: 'test',
        salt: 'test'
    });

    user.save((err, user) => {
        if (err) return console.error(err);
    })
}

const usersModel = {
    createUser
}

module.exports = usersModel
// getting-started.js
export {}
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true});

const mongoDb = mongoose.connection;
mongoDb.on('error', console.error.bind(console, 'connection error:'));
mongoDb.once('open', function() {
  console.log('connected to mongoDb')
});
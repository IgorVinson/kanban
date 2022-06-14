const mongoose = require('mongoose');
const connectString = 'mongodb+srv://IgorVinson:Karusek123@cluster0.t0d2hyo.mongodb.net/kanban?retryWrites=true&w=majority';
// const options = {};

function dbConnection(){
	mongoose.connect(connectString);
}
module.exports = dbConnection;
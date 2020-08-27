const mongoose = require( 'mongoose' );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = require( './models' );

const orm = {

}


module.exports = orm
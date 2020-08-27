const mongoose = require( 'mongoose' );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = require( './models' );

const orm = {
    getBook: async () => { return await db.Book.find({}) },
    postBook: async (body) => { return await db.Book.create(body) },
    deleteBook: async (id) => { return await db.Book.deleteOne({_id: mongoose.Types.ObjectId(id)}) }
}


module.exports = orm
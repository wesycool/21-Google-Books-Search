require('dotenv').config()
const axios = require('axios')
const orm = require('./orm');

function router( app ){
    app.get('/api/books', async (req,res) => {
        res.send(await orm.getBook())
    }),

    app.post('/api/books', async (req,res) =>{
        await orm.postBook(req.body.data)
        res.send('success')
    }),

    app.delete('/api/books/:id', async (req,res) =>{
        await orm.deleteBook(req.params.id)
        res.send('success')
    })

    app.get('/api/googlebooks/:value', async (req,res) => {
        const getList = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.value}&projection=lite&key=${process.env.GOOGLE_API}`)
        res.send(getList.data.items)
    })
}

module.exports = router;
const orm = require('./orm');

function router( app ){
    app.get('/api/books', async (req,res) =>{
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
}

module.exports = router;
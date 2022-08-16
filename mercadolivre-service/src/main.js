const express = require('express')
const ItemService = require('./application/itemService')

const app = express();
app.use(express.json())

app.use('/api/mercadolivre/item', ItemService)

app.listen(process.env.PORT, () => {
    return console.log(`API Listen on Port: ${process.env.PORT}`)
})
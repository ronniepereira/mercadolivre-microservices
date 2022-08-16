const express = require('express')
const itemService = require('./application/itemService')


const app = express();
app.use(express.json())

app.use('/api/database/mercadolivre/item', itemService)

app.listen(process.env.PORT, () => {
    return console.log(`API Listen on Port: ${process.env.PORT}`)
})
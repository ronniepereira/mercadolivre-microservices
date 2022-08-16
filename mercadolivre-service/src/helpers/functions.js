const axios = require('axios')

async function getItem(itemId) {
    const { env } = process
    const itemData = await axios.get(`${env.ML_URL}/items/${itemId}`)
    return itemData
}

async function sendItemDatabase(item) {
    const { env } = process
    const itemDatabaseData = await axios({
        method: 'post',
        url: `${env.DBSERVICE_URL}:${env.DBSERVICE_PORT}/api/database/mercadolivre/item`,
        data: item
    });

    return itemDatabaseData
}

module.exports = {
    getItem,
    sendItemDatabase
}
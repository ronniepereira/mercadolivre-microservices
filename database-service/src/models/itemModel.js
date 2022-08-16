const database = require('../infra/database/db')
const Item = require('../infra/database/Item')

async function saveItemDatabase(item) {
    await database.sync();
    const saveItem = await Item.upsert(item)
    return saveItem
}

module.exports = { saveItemDatabase }
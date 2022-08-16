function createDatabaseItemPayload(item) {
    return {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        category_id: item.category_id,
        price: item.price,
        available_quantity: item.available_quantity,
        condition: item.condition,
        link: item.permalink,
        first_image: item.pictures[0].secure_url
    }
}

module.exports = {
    createDatabaseItemPayload
}
function validateItemFields(itemBody) {
    const itemFields = [
        "id",
        "title",
        "subtitle",
        "category_id",
        "price",
        "available_quantity",
        "condition",
        "link",
        "first_image"
    ]

    return Object.keys(itemBody).every(prop => itemFields.includes(prop))
}

module.exports = {
    validateItemFields
}
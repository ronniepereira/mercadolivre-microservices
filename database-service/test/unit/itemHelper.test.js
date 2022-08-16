const itemHelper = require('../../src/helpers/itemHelper')

test("Deve validar um item válido", () => {
    const item = {
        id: "MLB1046680598",
        title: "Calcinha Bodyshorts Cotton Calvin Klein C46.01 Original ",
        subtitle: null,
        category_id: "MLB188065",
        price: 76.15,
        available_quantity: 11,
        condition: "new",
        link: "https://produto.mercadolivre.com.br/MLB-1046680598-calcinha-bodyshorts-cotton-calvin-klein-c4601-original-_JM",
        first_image: "https://http2.mlstatic.com/D_907127-MLB50400040740_062022-O.jpg"
    }

    const itemIsValid = itemHelper.validateItemFields(item)

    expect(itemIsValid).toBe(true)
})
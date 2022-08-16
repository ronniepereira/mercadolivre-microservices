const itemModel = require('../../src/models/itemModel')

test("Deve criar um item na base de dados", async () => {
    const item = {
        id: "MLB1046680598",
        title: "Calcinha Bodyshorts Cotton Calvin Klein C46.01 Original ",
        subtitle: null,
        category_id: "MLB188065",
        price: 76.15,
        available_quantity: 11,
        condition: "new",
        link: "https://produto.mercadolivre.com.br/MLB-1046680598-calcinha-bodyshorts-cotton-calvin-klein-c4601-original-_JM",
        first_image: "https://http2.mlstatic.com/D_907127-MLB50400040740_062022-O.jpg",
    }

    const itemResponse = await itemModel.saveItemDatabase(item)

    expect(itemResponse[0].id).toBe("MLB1046680598")
})
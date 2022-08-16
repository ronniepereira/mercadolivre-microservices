const functions = require('../../src/helpers/functions')

test("Deve fazer um get do item no Mercado Livre", async () => {
    const itemId = "MLB1046680598";
    const response = await functions.getItem(itemId)
    const item = response.data

    expect(item.id).toBe("MLB1046680598")
    expect(item.title).toBe("Calcinha Bodyshorts Cotton Calvin Klein C46.01 Original ")
})

test("Deve fazer um post do item para salvar via database service", async () => {
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
    const response = await functions.sendItemDatabase(item)
    expect(response.data.success).toBe(true)
})
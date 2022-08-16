const itemHelper = require('../../src/helpers/itemHelper')

test("Deve criar um item database payload", () => {
    const item = {
        id: "MLB1046680598",
        title: "Calcinha Bodyshorts Cotton Calvin Klein C46.01 Original ",
        subtitle: null,
        category_id: "MLB188065",
        price: 76.15,
        available_quantity: 11,
        condition: "new",
        permalink: "https://produto.mercadolivre.com.br/MLB-1046680598-calcinha-bodyshorts-cotton-calvin-klein-c4601-original-_JM",
        pictures: [
            {
                id: "907127-MLB50400040740_062022",
                url: "http://http2.mlstatic.com/D_907127-MLB50400040740_062022-O.jpg",
                secure_url: "https://http2.mlstatic.com/D_907127-MLB50400040740_062022-O.jpg",
                size: "500x331",
                max_size: "968x642",
                quality: "",
            },
            {
                id: "665470-MLB50400040742_062022",
                url: "http://http2.mlstatic.com/D_665470-MLB50400040742_062022-O.jpg",
                secure_url: "https://http2.mlstatic.com/D_665470-MLB50400040742_062022-O.jpg",
                size: "500x334",
                max_size: "976x652",
                quality: "",
            }
        ],
    }
    const itemPayload = itemHelper.createDatabaseItemPayload(item)

    expect(itemPayload.id).toBe("MLB1046680598")
    expect(itemPayload.title).toBe("Calcinha Bodyshorts Cotton Calvin Klein C46.01 Original ")
    expect(itemPayload.subtitle).toBeNull()
    expect(itemPayload.category_id).toBe("MLB188065")
    expect(itemPayload.price).toBe(76.15)
    expect(itemPayload.available_quantity).toBe(11)
    expect(itemPayload.condition).toBe("new")
    expect(itemPayload.link).toBe("https://produto.mercadolivre.com.br/MLB-1046680598-calcinha-bodyshorts-cotton-calvin-klein-c4601-original-_JM")
    expect(itemPayload.first_image).toBe("https://http2.mlstatic.com/D_907127-MLB50400040740_062022-O.jpg")
})
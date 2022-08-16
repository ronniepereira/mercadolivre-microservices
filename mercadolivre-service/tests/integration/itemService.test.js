const axios = require('axios')

test("Deve criar sincronizar um item", async () => {
    const itemId = "MLB1046680598";
    const response = await axios({
        url: "http://localhost:3000/api/mercadolivre/item",
        method: "POST",
        params: {
            itemId
        },
    });

    expect(response.data.success).toBe(true)
    expect(response.data.message).toBe("Item salvo com sucesso")
})
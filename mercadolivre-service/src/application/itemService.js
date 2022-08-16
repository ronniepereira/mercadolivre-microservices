const express = require('express');
const router = new express.Router();
const functions = require('../helpers/functions')
const itemHelper = require('../helpers/itemHelper')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/:itemId', async (req, res) => {
    try {
        const { itemId } = req.params
        const itemData = await functions.getItem(itemId)

        if (itemData.status !== 200) throw new Error("Não foi possível coletar as informações do item no Mercado Livre")

        const itemDatabasePayload = itemHelper.createDatabaseItemPayload(itemData.data)
        const postItemDatabaseResponse = await functions.sendItemDatabase(itemDatabasePayload)

        if (!postItemDatabaseResponse.data.success) throw new Error("Não foi possível armazenar o item")
        res.status(200).json({
            success: true,
            message: "Item salvo com sucesso"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Houve um erro interno, tente novamente mais tarde!"
        })
    }
})

module.exports = router
const express = require('express');
const router = new express.Router();
const itemModel = require('../models/itemModel')
const itemHelper = require('../helpers/itemHelper')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/', async (req, res) => {
    try {
        const item = req.body

        const itemIsValid = itemHelper.validateItemFields(item)
        if (!itemIsValid) throw new Error("Request inválida, por favor validar os campos do item")

        const saveItem = await itemModel.saveItemDatabase(item)
        return res.status(200).json({
            success: true,
            message: JSON.stringify(saveItem)
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: JSON.stringify(error)
        })
    }
})

module.exports = router
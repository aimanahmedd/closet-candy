const express = require('express')
const {
    createClothingItem,
    getClothingItems,
    getClothingItem,
    deleteClothingItem,
    updateClothingItem
} = require('../controllers/clothingItemControllers')

const router = express.Router()

//GET all clothing items
router.get('/', getClothingItems)

//GET a single clothing item
router.get('/:id', getClothingItem)

//POST a clothing item
router.post('/', createClothingItem)

//DELETE a clothing item
router.delete('/:id', deleteClothingItem)

//UPDATE a clothing item
router.patch('/:id', updateClothingItem)

module.exports = router
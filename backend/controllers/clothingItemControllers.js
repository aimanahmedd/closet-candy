const ClothingItem = require('../models/clothingItemModel')
const mongoose = require('mongoose')

//get all clothing items
const getClothingItems = async (req, res) =>{
    const clothingItems = await ClothingItem.find({}).sort({createdAt: -1})

    res.status(200).json(clothingItems)
}

//get a single clothing item
const getClothingItem = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such clothing item'})
    }

    const clothingItem = await ClothingItem.findById(id)


    if(!clothingItem){
        return res.status(404).json({error: 'No such clothing item'})
    }

    res.status(200).json(clothingItem)

}

//create a new clothing item
const createClothingItem = async (req, res) => {
    const {nameYay, typeOfItem, season, sizeNumber, imageURL} = req.body

    let emptyFields = []

    if(!nameYay){
        emptyFields.push('clothing name')
    }if(!typeOfItem){
        emptyFields.push('clothing type')
    }if(!season){
        emptyFields.push('clothing season')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in required fields', emptyFields})
    }

    //add doc to db
        try{
            const clothingItem = await ClothingItem.create({nameYay, typeOfItem, season, sizeNumber, imageURL})
            res.status(200).json(clothingItem)
        }catch(error){
            res.status(400).json({error: error.message})
        }
}

//delete a clothing item
const deleteClothingItem = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such clothing item'})
    }

    const clothingItem = await ClothingItem.findOneAndDelete({_id: id})

    if(!clothingItem){
        return res.status(404).json({error: 'No such clothing item'})
    }

    res.status(200).json(clothingItem)

}

//update a clothingItem
const updateClothingItem = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such clothing item'})
    }

    const clothingItem = await ClothingItem.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!clothingItem){
        return res.status(404).json({error: 'No such clothing item'})
    }

    res.status(200).json(clothingItem)
}

module.exports = {
    createClothingItem,
    getClothingItems,
    getClothingItem,
    deleteClothingItem,
    updateClothingItem
}
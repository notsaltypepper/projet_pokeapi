const Pokemon = require("../models/Pokemon")

const createPokemon = async (req, res) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const type = req.body.type
        const image = req.body.image

        const newPokemon = new Pokemon()
        newPokemon.id = id
        newPokemon.name = name
        newPokemon.type = type
        newPokemon.image = image
        await newPokemon.save()
        res.status(200).send("Pokemon created")
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}
const getPokemon = async (req, res) => {
    try {
        const id = req.body.id
        const pokemon = await Pokemon.findOne({ id: id })

        if (!id) {
            res.status(400).send("Pokemon not found")
        }
        res.status(200).json({
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type,
            image: pokemon.image,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

module.exports = { createPokemon, getPokemon }

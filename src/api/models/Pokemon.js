const { model, Schema } = require("mongoose")

const pokemonSchema = new Schema({
    id: Number,
    name: String,
    type: [String],
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model("Pokemon", pokemonSchema, "pokemon")

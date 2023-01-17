const User = require("../models/User")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const newUser = new User()
        newUser.username = username
        newUser.password = password
        await newUser.save()
        res.status(200).send("User created")
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const getUser = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const user = await User.findOne({
            username: username,
            password: password,
        })

        if (!user) {
            res.status(400).send("User or password incorrect")
        }
        res.status(200).json({
            username: user.username,
            password: user.password,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}
module.exports = { createUser, getUser }

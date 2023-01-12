const User = require("../models/User")

const isAuthenticated = async (req, res, next) => {
    try {
        const username = req.params.username
        if (!username) {
            res.status(401).send("Please log in")
            return
        }

        const user = await User.findOne({ username: username })
        if (!user) {
            res.status(401).send("User not found")
            return
        }

        const password = await User.findOne({ password: password })
        if (!password) {
            res.status(401).send("Password not found")
        }

        req.user = user
        next()
    } catch (error) {
        res.status(500).send("ERROR auth")
    }
}

module.exports = isAuthenticated

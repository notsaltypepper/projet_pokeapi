const express = require("express")
const isAuthenticated = require("./middleware/auth.middleware.js")
require("./database")

const app = express()
app.use(express.json())

app.get("/", isAuthenticated)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

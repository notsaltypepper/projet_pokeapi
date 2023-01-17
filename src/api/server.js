const express = require("express")
const isAuthenticated = require("./middleware/auth.middleware.js")
const usercontroller = require("./controllers/user.controller.js")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = 3030
require("./database")

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get("/", isAuthenticated)

app.post("/signin", usercontroller.createUser)

app.get("/login", usercontroller.getUser)

app.listen(3030, () => {
    console.log("Server running on port 3030")
})

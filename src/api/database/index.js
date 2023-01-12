const mongoose = require("mongoose")
const { connect, set } = mongoose

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connection Established")
})

mongoose.connection.on("reconnected", () => {
    console.log("Connection Reestablished")
})

mongoose.connection.on("close", () => {
    console.log("Connection Closed")
})

mongoose.connection.on("error", (error) => {
    console.log("DB ERROR", error)
})

connect(
    "mongodb+srv://notsaltypepper:a0EELbJD3xhFHNS1@cluster0.1y643vk.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
)

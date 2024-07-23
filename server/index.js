const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors")
const {mongoose} = require("mongoose")
const app = express()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
    console.log("Database Connected")
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening`)
    })    
    })
    .catch((error) => {
        console.error(error)
    })

app.use(express.json())    



app.use("/", require('./routes/authRoutes'))


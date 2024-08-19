const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {mongoose} = require("mongoose");
// const orderRoutes = require('./routes/orderRoutes');
// const serviceRoutes = require('./routes/serviceRoutes');

const allowedOrigin = 'http://localhost:3000'; 


dotenv.config();

const app = express();

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


//middleware
app.use(express.json())    

//app.use(cors())
app.use(cors({
    origin: allowedOrigin,
    credentials: true // Allow cookies and other credentials
}));

app.use("/", require('./routes/authRoutes'))


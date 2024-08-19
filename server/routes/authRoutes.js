const express = require("express")
const router = express.Router()
const cors = require("cors")   //to connect to different hosts/api endpoints
const {test,registerUser,loginUser} = require('../controllers/authController')
const allowedOrigin = 'http://localhost:3000'; 

router.use(cors({
    origin: allowedOrigin,
    credentials: true // Allow cookies and other credentials
}));

router.get("/", test)
router.post("/register", registerUser)
router.post("/login", loginUser)


module.exports = router
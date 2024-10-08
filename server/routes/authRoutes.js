const express = require("express")
const router = express.Router()
const cors = require("cors")   //to connect to different hosts/api endpoints
const {test,registerUser,loginUser} = require('../controllers/authController')


router.use(
    cors({
        credentials: true,
        //add origin later
        origin: "http://localhost:3000"
    })
)

router.get("/", test)
router.post("/register", registerUser)
router.post("/login", loginUser)


module.exports = router
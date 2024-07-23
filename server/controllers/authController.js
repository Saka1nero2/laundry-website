const User = require('../dbmodel/user')
const {hashPassword, comparePassword} = require('../helpers/auth')

const test = (req,res) => {
    res.status(200).json("Test is working")
}

//register endpoint
const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body;

        //check if name is entered
        if(!name){
            return res.json({
                error: "Name is required"
            })
        }
        //check if password is good
        if(!password || password.length < 6){
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            })
        }
        //check if email does not already exist
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error: "Email is already in use"
            })
        }

        const hashedPassword = await hashPassword(password)

        //create user in database
        const user = await User.create({
            name,
            email, 
            password: hashedPassword
        })

        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
    }
}

//login endpoint
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body
        
        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            return res.json({
                error: "No user with such email exists"
            })
        }

        //check if passwords match
        const match = await comparePassword(password,user.password)
        if(match){
            return res.status(200).json("Passwords match")
        }
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}
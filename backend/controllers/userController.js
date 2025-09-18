import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

//Register a new user
//POST /api/users
//access Public
const registerUser = asyncHandler(async (req, res) => {

    console.log("Req Body:", req.body);

    const { fullname, email, password } = req.body

    if (!fullname || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({email})

    //check if user exists
    if (userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        fullname,
        email,

        password: hashedPassword
    })

    if (user){
        res.status(201).json({
            _id: user.id,
            fullname: user.fullname,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})


//Authenticate a user
//POST /api/users/login
//access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            token,
            _id: user.id,
            fullname: user.fullname,
            email: user.email,
            token: generateToken(user._id)
        }) 
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
        }

})

//Get user data
//GET /api/users/me
//access Private
const getMe = asyncHandler(async (req, res) => {
    const {_id, fullname, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        fullname,
        email
    })
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
export {
    registerUser,
    loginUser,
    getMe,
}
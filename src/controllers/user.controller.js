import asyncHandler from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
const registerUser = asyncHandler(async(req,res)=>{
    // get user details from frontend
    // validation of details - non empty
    // check if user already exists
    // check for images
    // check for avatar
    // upload to cloudinary
    // create user object - create entry in db 
    // remove password and refresh token field from respose
    // check for user creation
    // return res

    const {fullname,email,username,password} = req.body;
    console.log(fullname)
    // if(fullname === ""){
    //     throw new ApiError(400,"Full name is required")
    // }

    if(
        [fullname,email,username,password].some((field)=>
        field?.trim() === "")
    ){
        throw new ApiError(400,"All fields is required")
    }

    const existedUser = User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"User already exists with this email or username")
    }

    req.files?.avatar[0]
}) 

export {registerUser}
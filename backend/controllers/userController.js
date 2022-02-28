const catchAsyncErrors =require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const User =require("../models/userModel");

//Register a User 

exports.registerUser =catchAsyncErrors( async(req,res,next)=>{

    const {name,email,password}=req.body ;

    const user = await User.create({
        name,
        email,
        password,
        avatar :{
            public_id:"this is an id ",
            url:"anasfoajsf",
        },
    });

    res.status(201).json({
        success:true,
        user
    })

})
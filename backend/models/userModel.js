const mongoose= require("mongoose");
const validator = require("validator")
const bcrypt=require("bcryptjs");

const userSchema = new mongoose.Schema({


    name:{
        type:String,
        required:[true,"Please Enter your Name"],
        maxLength:[30,"Name cannot exceed 30 Characters"],
        minlength:[4,"Name should have more than 4 characters"]
    },

    email:{
        type:String,
        required:[true,"Please enter your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"],
    },

    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password should be grater than 8 charracters"],
        select:false,
    },

    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }    
    },

    role:{
        type:String,
        default:"user",
    },

    resetPasswordToken:String,
    resetPasseordExpire:Date,
});


module.exports=mongoose.model("User",userSchema)
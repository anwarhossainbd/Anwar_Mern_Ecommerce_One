const Order =require("../models/orderModel");
const Product =require("../models/orderModel.js");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");


//Create new Order 

exports.newOrder=catchAsyncErrors(async(req,res,next)=>{
    const {shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } =req.body ;

    const order =await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now(),
        user:req.user._id,
    });

    res.status(201).json({
        success:true,
        order,
    })
})

//Get single Order

exports.getSingleOrder= catchAsyncErrors(async(req,res,next)=>{

    const order=await Order.findById(req.params.id).populate(
        "user",
        "name email"
    ) ;


    if(!order){
        return next(new ErrorHander("Order not found with this Id",404))
    }

    res.status(200).json({
        success:true,
        order
    })
})



//Get Logged in user Orders

exports.myOrders= catchAsyncErrors(async(req,res,next)=>{

    const orders=await Order.find({user:req.user._id})

    res.status(200).json({
        success:true,
        orders,
    })


})
const app =require("./app");
const dotenv=require('dotenv')
const connectDatabase=require("./config/database")

//config 
dotenv.config({path:"backend/config/config.env"})

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

//Unhandled Promise Rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to Unhandled Promise Rejection`)
    
    server.close(()=>{
        process.exit(1)
    })

})
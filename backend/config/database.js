const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = ()=>{

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DB connected")

    })
    .catch((error)=>{
        console.log("Connection error ", error)
        console.error(error)
        process.exit(1)
    })

}

module.exports =dbConnect;
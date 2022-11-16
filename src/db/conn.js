const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/web_site"
).then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(error)
})
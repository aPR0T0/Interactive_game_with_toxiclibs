const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://alqama:alqama@cluster0.7rsbjwu.mongodb.net/test")
.then(()=>{
    console.log("Mongo connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

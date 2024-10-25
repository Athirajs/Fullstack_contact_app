const mongoose = require("mongoose")

const contactSchema = new  mongoose.Schema ({
    name: {
        type: String,
        require: [true, "Please enter contact name"]
    },
    email: {
        type: String,
        unique: true,
        require: [true, "Please enter contact email"]
    },
    phone: {
        type: String,
        require: [true, "Please enter contact phone"]
    },
    designation: {
        type: String,
        require: [true, "Please enter contact designation"]
    },
    
},
{   timestamps:true})

module.exports = mongoose.model("Contact" , contactSchema)
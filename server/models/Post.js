const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"signup" 
    },
    image:{
        type: String,
        unique:true
    },
    caption:{
        type: String,
        default: 0.00
    },
     date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("post",PostSchema)
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const postSchema=new Schema({
    title: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    deleted:{
        type:Boolean,
        default:false,
        required:true
    }
});

module.exports=mongoose.model('Task',postSchema);
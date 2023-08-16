const mongoose=require('mongoose');

const ReactFormDataSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:Buffer,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const Blog=mongoose.model('Blog',ReactFormDataSchema);
module.exports=Blog;
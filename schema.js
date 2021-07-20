var mongoose=require('mongoose');
  
var PostSchema = new mongoose.Schema({
    title:String,
    discription:String
    //postid:Number,
    // date:Date
});
  
module.exports = mongoose.model('post', PostSchema, 'Post');






const mongoose = require("mongoose");
const todosSchema =new mongoose.Schema({
    task:String,
  

})

const todosModel = mongoose.model("todoss",todosSchema);
module.exports=todosModel;

const mongoose = require("mongoose");

const ReactFormDataSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
 image: {
  type: String,
  default: "",
 },
  description: {
    type: String,
    default: "",
  },
});

const Blog = mongoose.model("Blog", ReactFormDataSchema);
module.exports = Blog;


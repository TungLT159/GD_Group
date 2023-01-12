const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    description: String,
    img: String,
    tags: Array,
});

module.exports = mongoose.model("Post", postSchema);
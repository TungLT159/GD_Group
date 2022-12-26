const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    description: String,
    img: Object,
    tags: Array,
});

module.exports = mongoose.model("Post", postSchema);
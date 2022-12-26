const Post = require("../models/Post");
exports.savePost = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const tags = req.body.tags;
    console.log(req.body);
    const post = new Post({
        title: title,
        description: description,
        img: image,
        tags: tags,
    });
    post.save();
    res.redirect("http://localhost:3002/dashboard/blog/new");
};
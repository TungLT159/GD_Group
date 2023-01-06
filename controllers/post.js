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
    res.redirect("http://localhost:3000/dashboard/blog/new");
};

exports.getPosts = (req, res) => {
    Post.find().then((posts) => {
        console.log(posts);
        res.json({
            posts: posts,
        });
    });
};
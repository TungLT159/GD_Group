const Post = require("../models/Post");
const User = require("../models/User");
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
    return post.save();
    // res.redirect("http://localhost:3000/dashboard/blog/new");
};

exports.getPosts = (req, res) => {
    Post.find().then((posts) => {
        res.json({
            posts: posts,
        });
    });
};

exports.postEditUser = (req, res) => {
    const displayName = req.body.displayName;
    const email = req.body.email;
    const photoURL = req.body.photoURL;
    const phoneNumber = req.body.phoneNumber;

    const filter = { email: email };
    const update = {
        displayName: displayName,
        photoURL: photoURL,
        phoneNumber: phoneNumber,
    };
    User.findOneAndUpdate(filter, update, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
};
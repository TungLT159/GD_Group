const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.register = (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then((user) => {
        if (user) {
            res.status(422).json({ message: "Email đã tồn tại" });
        } else {
            bcrypt
                .hash(password, 12)
                .then((hashPassword) => {
                    const user = new User({
                        email: email,
                        password: hashPassword,
                    });
                    user.save();
                })
                .then((user) => {
                    const accessToken = jwt.sign({...user }, process.env.SECRET_KEY, {
                        expiresIn: "3d",
                    });
                    res.send({ accessToken });
                })
                .catch((err) => {
                    res.status(422).send({ message: err });
                });
        }
    });
};

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const remember = req.body.remember;
    console.log(req.body);
    User.findOne({ email: email }).then((user) => {
        if (!user) {
            res.status(422).json({
                message: "Email không đúng",
            });
        }
        bcrypt.compare(password, user.password).then((doMatch) => {
            if (!doMatch) {
                res.status(422).json({
                    message: "Mật khẩu không đúng",
                });
            } else {
                const accessToken = jwt.sign({ userId: user._id },
                    process.env.SECRET_KEY, {
                        expiresIn: "3d",
                    }
                );
                res.send({ accessToken });
            }
        });
    });
};

exports.getAccount = (req, res) => {
    const user = req.user;
    console.log(user);
    User.findById(user.userId).then((user) => {
        res
            .send({
                user: user,
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
const express = require("express");

const router = express.Router();
const isAuth = require("../middleware/auth");
const postController = require("../controllers/post");

const authController = require("../controllers/auth");

router.post("/api/gdvn/post", postController.savePost);

router.get("/api/gdvn/posts", postController.getPosts);

router.post("/api/gdvn/register", authController.register);

router.post("/api/gdvn/login", authController.login);

router.get(
    "/api/gdvn/current-account",
    isAuth.authenticateJWT,
    authController.getAccount
);

module.exports = router;
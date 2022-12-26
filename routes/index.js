const express = require("express");

const router = express.Router();

const postController = require("../controllers/post");

const authController = require("../controllers/auth");

router.post("/api/gdvn/post", postController.savePost);

router.post("/api/gdvn/register", authController.register);

module.exports = router;
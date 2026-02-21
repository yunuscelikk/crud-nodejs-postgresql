const express = require("express");
const router = express.Router();
const { createPost, deletePost, getAllPosts } = require("../controllers/postController");

router.post("/", createPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePost);

module.exports = router;
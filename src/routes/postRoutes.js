const express = require("express");
const router = express.Router();
const { createPost, deletePost, getAllPosts, updatePost } = require("../controllers/postController");

router.post("/", createPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePost);

router.put("/:id", updatePost);

module.exports = router;
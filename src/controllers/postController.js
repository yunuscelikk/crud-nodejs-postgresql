const { Post } = require("../models");

const createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    if (!title || !content) {
      return res.status(400).json({
        error: "Title and content are required",
      });
    }

    const post = await Post.create({
      title,
      content,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Post creation failed" });
  }
};

const deletePost = async (req,res) => {
    const { id } = req.params;

    try {
        const post = await Post.findOne({
            where: {
                id,
            },
        });

        if (!post) {
            return res.status(404).json({ error: "Post not found"});
        }

        await post.destroy();

        res.status(200).json(post)

    } catch (err) {
        console.error(err)
        res.status(500).json({error: "Post deletion failed"});
    }
}
module.exports = { createPost, deletePost };

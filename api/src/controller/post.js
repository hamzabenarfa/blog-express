const Post = require("../models/Post");

const createPost = async (req, res) => {
  const authorId = req.user.id;
  const data = req.body;
  try {
    const existPost = await Post.findOne({ title: data.title });
    if (existPost) {
      return res.status(409).json("Post with this title already exists");
    }
    const newPost = new Post({
      ...data,
      user: authorId,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const authorId = req.user.id;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json("Post not found");
    }
    // Check if post.user is defined before calling toString()
    if (post.user && post.user.toString() !== authorId) {
      return res.status(403).json("You are not authorized to delete this post");
    }
    // Correct the method name to findByIdAndDelete
    await Post.findByIdAndDelete(postId);
    res.status(200).json("Post has been deleted...");
  } catch (err) {
    res.status(500).json(err);
    console.log("🚀 ~ deletePost ~ err:", err);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getMyOwnPosts = async (req, res) => {
  const authorId = req.user.id;

  try {
    const posts = await Post.find({ user: authorId });
    !posts && res.status(404).json("Posts not found");
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate({
      path: "user",
      select: "username email _id",
    });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
  getMyOwnPosts,
};

const axios = require("axios");
const API = "http://localhost:3003/posts"; // JSON Server URL

// get all posts from api
const allPosts = async (_, res) => {
  try {
    const response = await axios.get(API);
    // console.log(response);
    res.status(200).json({
      message: "Posts fetched successfully",
      data: response.data,
      total: response.data.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get specific post by id
const postById = async (req, res) => {
  try {
    const postId = req.params.id;
    const response = await axios.get(`${API}/${postId}`);
    if (response.data) {
      res.status(200).json({
        data: response.data,
        statusText: "Post fetched successfully",
        status: response.status,
      });
    } else {
      res.status(404).json({
        data: null,
        error: "Post not found",
        statusText: "Post not found",
        status: response.status,
      });
    }
  } catch (err) {
    res.status(500).json({
      data: null,
      error: err.message,
      statusText: "Internal Server Error",
      status: 500,
    });
  }
};

// create new post
const createPost = async (req, res) => {
  console.log(req.body);
  const { title, content, userId } = req.body;
  try {
    if (!title || !content || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newPost = {
      title,
      content,
      userId,
    };
    const response = await axios.post(API, newPost);
    return res.status(201).json({
      success: "Post created successfully",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// update post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const currentPost = await axios.get(`${API}/${postId}`);
    console.log(currentPost);
    if (!currentPost.data) {
      return res.status(404).json({ error: "Post not found" });
    }
    const newPost = { ...currentPost.data, ...req.body };
    const response = await axios.put(`${API}/${postId}`, newPost);
    return res.status(200).json({
      success: "Post updated successfully",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// delete post
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const currentPost = await axios.get(`${API}/${postId}`);
    if (!currentPost.data) {
      return res.status(404).json({ error: "Post not found" });
    }
    await axios.delete(`${API}/${postId}`);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    if (err.response.status === 404) {
      res.status(404).json({ error: "Post not found" });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
};
module.exports = {
  allPosts,
  postById,
  createPost,
  updatePost,
  deletePost,
};

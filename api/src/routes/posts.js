const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
  getMyOwnPosts,
} = require("../controller/post");

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/my-posts", getMyOwnPosts);
router.get("/:id", getPostById);
router.get("/", getAllPosts);


// TO-DO  integrate this into post
// const upload = require("../config/multer");
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });


module.exports = router;
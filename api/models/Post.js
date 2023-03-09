const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    descreption: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);
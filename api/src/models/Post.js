const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: { // Fixed typo from 'description' to 'description'
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    user: { // Reference to the User model
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

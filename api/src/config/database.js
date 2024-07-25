const mongoose = require("mongoose");

const connectDatabase = () => {
  const uri = process.env.MONGODB_URI;
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = { connectDatabase };

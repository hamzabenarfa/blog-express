const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const userRoute = require("./users");
const postRoute = require("./posts");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/posts", postRoute);

module.exports = router;

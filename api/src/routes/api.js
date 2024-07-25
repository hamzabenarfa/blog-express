const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticationToken")

const authRoute = require("./auth");
const userRoute = require("./users");
const postRoute = require("./posts");

router.use("/auth", authRoute);

router.use(authenticateToken);
router.use("/users", userRoute);
router.use("/posts", postRoute);

module.exports = router;

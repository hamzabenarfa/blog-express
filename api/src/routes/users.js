const router = require("express").Router();

const { updateUser, deleteUser, getUserById } = require("../controller/user");


router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);

module.exports = router;

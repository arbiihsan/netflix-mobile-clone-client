const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/users", UserController.showUsers);
router.post("/users", UserController.addUser);
router.get("/users/:id", UserController.showUserById);
router.delete("/users/:id", UserController.deleteUserById);

module.exports = router;

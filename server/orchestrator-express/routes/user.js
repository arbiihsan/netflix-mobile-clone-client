const express = require("express");
const userRoute = express.Router();
const UserController = require("../controllers/userController");

userRoute.get("/users", UserController.showAllUser);
userRoute.post("/users", UserController.addUser);
userRoute.get("/users/:id", UserController.test);
userRoute.delete("/users/:id", UserController.deleteUserById);

module.exports = userRoute;

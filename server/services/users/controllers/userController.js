const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

class UserController {
  static test(req, res) {
    res.send("ini test");
  }
  static async addUser(req, res, next) {
    let { username, email, password, role, phoneNumber, address } = req.body;
    try {
      password = bcrypt.hashSync(password, 8);

      await Users.create({
        username,
        email,
        password,
        role: "admin",
        phoneNumber,
        address,
      });
      res.status(201).json({ msg: "Successfully added user" });
    } catch (error) {
      console.log(error);
    }
  }
  static async showUsers(req, res, next) {
    try {
      const users = await Users.findAll();

      users.forEach((el) => delete el.password);

      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteUserById(req, res, next) {
    const { id } = req.params;
    try {
      await Users.delete(id);

      res.status(201).json({ msg: "User has been deleted" });
    } catch (error) {
      console.log(error);
    }
  }
  static async showUserById(req, res, next) {
    const { id } = req.params;
    try {
      const user = await Users.findByPk(id);
      delete user.password;

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;

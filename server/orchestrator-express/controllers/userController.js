const USERS_SERVICE_URL = "http://localhost:4001";
const redis = require("../config/redisConnection");
const axios = require("axios");

class UserController {
  static test(req, res) {
    res.send("ini test");
  }
  static async addUser(req, res, next) {
    let { username, email, password, role, phoneNumber, address } = req.body;
    try {
      const data = await axios.post(`${USERS_SERVICE_URL}/users`, {
        username,
        email,
        password,
        role: "admin",
        phoneNumber,
        address,
      });

      //   console.log(data);
      await redis.del("users");

      res.status(201).json({ msg: "Successfully add user" });
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  }
  static async showAllUser(req, res, next) {
    try {
      const userCache = await redis.get("users");

      if (userCache) {
        const data = JSON.parse(userCache);
        res.status(200).json(data);
      } else {
        const { data } = await axios.get(`${USERS_SERVICE_URL}/users`);
        await redis.set("users", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  }
  static async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await axios.delete(`${USERS_SERVICE_URL}/users/${id}`);
      await redis.del("users");
      //await redis.del(`users:${id}`);

      console.log(data);

      res.status(201).json({ msg: `User with ${id} has been delete` });
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  }
}

module.exports = UserController;

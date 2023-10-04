const GENRES_SERVICE_URL = "http://localhost:4002";
const redis = require("../config/redisConnection");
const axios = require("axios");

class GenreController {
  static test(req, res) {
    res.send("ini test");
  }
  static async addGenre(req, res, next) {
    let { name } = req.body;
    try {
      await axios.post(`${GENRES_SERVICE_URL}/genres`, { name });

      // console.log(data);
      await redis.del("genres");

      res.status(201).json({ msg: "Successfully added genre" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async showAllGenre(req, res, next) {
    try {
      const genreCache = await redis.get("genres");

      if (genreCache) {
        const data = JSON.parse(genreCache);
        res.status(200).json(data);
      } else {
        const { data } = await axios.get(`${GENRES_SERVICE_URL}/genres`);
        await redis.set("genres", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async deleteGenre(req, res, next) {
    const { id } = req.params;
    try {
      await axios.delete(`${GENRES_SERVICE_URL}/genres/${id}`);
      await redis.del("genres");
      // await redis.del(`movies:${id}`);

      res.status(200).json({ msg: "Genre has been deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = GenreController;

const MOVIES_SERVICE_URL = "http://localhost:4002";
const redis = require("../config/redisConnection");
const axios = require("axios");

class MovieController {
  static test(req, res) {
    res.send("ini test");
  }
  static async addMovie(req, res, next) {
    let {
      title,
      synopsis,
      trailerUrl,
      imgUrl,
      rating,
      authorId,
      genreId,
      Casts,
    } = req.body;
    try {
      await axios.post(`${MOVIES_SERVICE_URL}/movies`, {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        Casts,
      });

      // console.log(data);
      await redis.del("movies");

      res.status(201).json({ msg: "Successfully added movie" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async showAllMovies(req, res, next) {
    try {
      const movieCache = await redis.get("movies");

      if (movieCache) {
        const data = JSON.parse(movieCache);
        res.status(200).json(data);
      } else {
        const { data } = await axios.get(`${MOVIES_SERVICE_URL}/movies`);
        await redis.set("movies", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async deleteMovie(req, res, next) {
    const { id } = req.params;
    try {
      await axios.delete(`${MOVIES_SERVICE_URL}/movies/${id}`);
      await redis.del("movies");
      // await redis.del(`movies:${id}`);

      res.status(200).json({ msg: "Movie has been deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async editMovie(req, res, next) {
    // console.log("<<<<<<<<<masukkkkkkkk");
    const { id } = req.params;
    let {
      title,
      synopsis,
      trailerUrl,
      imgUrl,
      rating,
      authorId,
      genreId,
      Casts,
    } = req.body;
    try {
      // console.log(req.body, "<<<<<<<<<<<");
      const data = await axios.put(`${MOVIES_SERVICE_URL}/movies/${id}`, {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        Casts,
      });
      // console.log(data);

      await redis.del("movies");
      await redis.del(`movies:${id}`);

      res.status(200).json({ msg: "Successfully updated the movie" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = MovieController;

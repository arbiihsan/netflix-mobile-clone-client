const movieRoute = require("express").Router();
const MovieController = require("../controllers/movieController");

movieRoute.get("/movies", MovieController.showMovies);
movieRoute.post("/movies", MovieController.addMovie);
movieRoute.get("/movies/:id", MovieController.showMovieById);
movieRoute.put("/movies/:id", MovieController.editMovie);
movieRoute.delete("/movies/:id", MovieController.deleteMovie);

module.exports = movieRoute;

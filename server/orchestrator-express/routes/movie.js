const express = require("express");
const MovieController = require("../controllers/movieController");
const movieRoutes = express.Router();

movieRoutes.get("/movies", MovieController.showAllMovies);
movieRoutes.post("/movies", MovieController.addMovie);
movieRoutes.get("/movies/:id", MovieController.test);
movieRoutes.put("/movies/:id", MovieController.editMovie);
movieRoutes.delete("/movies/:id", MovieController.deleteMovie);

module.exports = movieRoutes;

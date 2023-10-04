const genreRoute = require("express").Router();
const GenreController = require("../controllers/genreController");

genreRoute.get("/genres", GenreController.showGenres);
genreRoute.post("/genres", GenreController.addGenre);
genreRoute.get("/genres/:id", GenreController.showGenreById);
genreRoute.put("/genres/:id", GenreController.editGenre);
genreRoute.delete("/genres/:id", GenreController.deleteGenre);

module.exports = genreRoute;

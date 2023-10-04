const express = require("express");
const GenreController = require("../controllers/genreController");
const genreRoutes = express.Router();

genreRoutes.post("/genres", GenreController.addGenre);
genreRoutes.get("/genres", GenreController.showAllGenre);
genreRoutes.get("/genres/:id", GenreController.test);
genreRoutes.delete("/genres/:id", GenreController.deleteGenre);

module.exports = genreRoutes;

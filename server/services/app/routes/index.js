const router = require("express").Router();
const userRoutes = require("./user");
const movieRoutes = require("./movie");
const genreRoutes = require("./genre");

router.use(userRoutes);
router.use(movieRoutes);
router.use(genreRoutes);

module.exports = router;

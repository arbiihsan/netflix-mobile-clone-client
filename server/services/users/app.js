require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const routes = require("./routes");
const { connect } = require("./config/mongoConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

connect().then(async (db) => {
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
});

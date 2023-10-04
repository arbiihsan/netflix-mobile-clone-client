const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_DB_URL;
let db;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connect() {
  try {
    await client.connect();
    const database = await client.db("netflix-mobile-users");
    db = database;
    console.log("You successfully connected to MongoDB!");

    return database;
  } catch (err) {
    console.log(err);
    // await client.close();
  }
}

const getDB = () => db;

module.exports = { connect, getDB };

const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongoConnection");

class Users {
  static collection() {
    return getDB("netflix-mobile-users").collection("users");
  }
  static findAll() {
    return this.collection().find().toArray();
  }
  static findByPk(id) {
    return this.collection().findOne({ _id: new ObjectId(id) });
  }
  static create(user) {
    return this.collection().insertOne(user);
  }
  static delete(id) {
    return this.collection().deleteOne({ _id: new ObjectId(id) });
  }
}

module.exports = Users;

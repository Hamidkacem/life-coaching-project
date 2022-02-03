const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/test";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db

const itemSchema = new mongoose.Schema({
  title: String,
  text: String,
  createdAt: { type : Date, default: Date.now }
});
const Item = mongoose.model("Item", itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var create = function(data, callback) {
  Item.create(data, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports = {create, selectAll, Item};
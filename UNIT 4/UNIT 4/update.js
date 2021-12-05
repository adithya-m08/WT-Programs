var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("3k");
var myquery = { address: "Apple st 652" };
var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
dbo.collection("customers").updateOne(myquery, newvalues, function(err,
res) {
if (err) throw err;
console.log("1 document updated");
db.close();
});
});

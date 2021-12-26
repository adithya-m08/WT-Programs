var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("3k");
var myquery = { address: "Highway 37" }; // address starts with O
dbo.collection("customers").deleteMany(myquery, function(err, obj) {
if (err) throw err;
console.log(obj.deletedCount+ " document(s) deleted");
db.close();
});
});

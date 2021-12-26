var express = require("express"); // npm install express --save

var router = express.Router();
//var MongoClient = require("mongo").MongoCLient;

router.get("/", function(req,res){
	res.send("Hi There!!!")
//	MongoClient.collection("hello").find({})
})
router.get("/:sid", function(req,res){
// localhost/student/1234
// localhost:3000/hello?msg=greeting - querystring
	res.send("Hi There, Greetings!!!")
	req.query // => {} req.query.dept req.query.rtype
	//req.params.msg
//	MongoClient.collection("hello").find({dept:req.query.dept})
})



router.post("/", function(req,res){ //creation of resource
	res.send("Hello Greeting Message saved!")
	//req.body
//	MongoClient.collection("hello").insert(req.body)
})
router.put("/:id",function(req,res){ //modification of resource
	res.send("Hello Greeting Message updated!")
//	MongoClient.collection("hello").update({srn:req.params.id},{studentprofile:skjjgksfgsfgnsfngk}) //BLOB
})
router.delete("/", function(req,res){
	res.send("Hello Greeting Message deleted!")
//	MongoClient.collection("hello").delete({})
})

module.exports = router;

var express = require("express"); // npm install express --save
var MongoClient = require("mongodb").MongoClient;
var router = express.Router();
//var MongoClient = require("mongo").MongoCLient;
//multipart-formdata
var multer = require('multer');
var upload = multer();

app.use(upload.array())
//req.body

router.get("/", function(req,res){ // GET /student?dept=cse&hostel=yes
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').find(req.query).toArray(function(err,objs){ // find({})
			res.send(objs)
		});
	});
});

router.get("/:sid", function(req,res){ 
// GET /student/1234
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').findOne({srn:req.params.sid},function(err,obj){ // find({})
			res.send(obj)
		});
	});
});

router.post("/", function(req,res){
	//POST /student message body - {srn:"1234", name:"", dept:"ece"}
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').insert(req.body,function(err,objs){ // find({})
			res.send("Save Successful!!!")
		});
	});
})

router.put("/:sid", function(req,res){
	//PUT /student/1234 message body - {srn:"1234", name:"", dept:"ece"}
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').update({srn:req.params.sid},req.body,function(err,objs){
			res.send("Update Successful!!!")
		});
	});
})

router.delete("/:sid", function(req,res){
	//DELETE /student/1234
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').delete({srn:req.params.sid}, function(err,objs){
			if(err) 
				res.send("Delete Failed!!!")
			else
				res.send("Delete Successful!!!")
		});
	});
})
module.exports = router;
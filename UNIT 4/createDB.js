var mongoclient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/3k";
mongoclient.connect(url,function(err,db){
    if(err)throw err;
    console.log("DB has been created and switched to db");
    db.close();
})
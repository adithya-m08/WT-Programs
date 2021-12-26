const express = require('express');
const fileUpload = require('express-fileupload');
const path= require('path');
const app = express();

app.use(fileUpload());
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/upload.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/upload', function(req, res) {
  
    if (req.files){
      console.log(req.files); //view object structure
      var uploadedFile=req.files.sampleFile; // The name of the input field (i.e. "sampleFile") in upload.html
      var uploadedFile_name= uploadedFile.name;
      var uploadedFile_size= uploadedFile.size;


      //create a directory called uploads
      uploadedFile.mv('./uploads/'+ uploadedFile_name, function(err){
        if (err){
          console.log(err);
        }
        res.send(uploadedFile_name+ ' of size' + uploadedFile_size+ ' uploaded!');
      });
    }
});
app.listen(8080);



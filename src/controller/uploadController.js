const express = require('express');
const multer = require('multer');


const xlsxj = require("xlsx-to-json");
const db = require('../database/index')

const multerConfig = require('../middlewares/multer')


const router = express.Router();

//function responsible for creating the upload record in the database
function data(result){
    db.insert(result, (err)=>{
        if(err){
            console.log(`error: ${err}`)
        }else{
           console.log('sucess')       
        }
    })   
}

//function responsible for converting the XLSX file to json
function convertXlsxToJson(file){
    xlsxj({
        input: file, 
        output: "output.json"
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          console.log(result);
          data(result)
        }
      });
}


//route responsible for receiving the upload
router.post('/upload', multer(multerConfig).single('file'), (req, res) =>{
    convertXlsxToJson(req.file.path)
  
    return res.json({hello: "Upload"});
})




module.exports = app => app.use('/api', router)


//require('dotenv').config();
const PORT = process.env.PORT || 8000;
//const getId = require('./getId')
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
let cheerio = require('cheerio');

let target = "http://www.imdb.com/random/title";

app.set('view engine','ejs');
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/getid',(req,res)=>{
  try{
    request(target,function(err,resquest,body){
      //var html=body;
      let $ = cheerio.load(body);
      let movieId = $('meta[property="pageId"]').attr('content');
      let type = $('meta[property="og:type"]').attr('content');
      //let year = $();
      console.log("type:",type);
      res.send({movieId});
    })
    //res.send();
  }catch(e){
    console.log(e);
    res.send(e);
  }
});


app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});

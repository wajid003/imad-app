var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var app = express();
var pool = new Pool(config);
var config = {
    user:'abdulwajid764',
    database: 'abdulwajid764',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
app.use(morgan('combined'));


function hash (input, salt) {
    //how do we create hash
    var hashed = crypto.pbkdf25ync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
}
app.get('/hash/:input', function(req, res){
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashedString);
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/comment.html',function (req,res){
    res.sendFile(path.join(__dirname, 'ui' , 'comment.html'));
});

app.get('/test-db', function(req,res){
    // make a select request
    //return the response with result
    pool.query('select * from test', function(err,result){
       if (err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result));
       }
    });
});




app.get('/post.html',function (req,res){
    res.sendFile(path.join(__dirname, 'ui' , 'post.html'));
});
var data;
var text;
app.get('/save',function (req,res){
    var type = req.query.text;
    res.send(JSON.stringify(text));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
    
});
var names = [];
app.get('/submit-name/', function (req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/article.html',function (req,res){
    var name = req.query.text1;
    res.send(JSON.stringify(name));
});
app.get('/ui/main.js', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/article-two', function (req,res){
    res.send('article two requested will be served here');
});
app.get('/article-three', function (req,res){
    res.send('article three requested will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

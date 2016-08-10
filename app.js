var express = require('express');
var app = express();
var port = 5555;
var mongodb = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

app.listen(port);

// make public folder public
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', '.ejs');

//get post stuff
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    var url = 'mongodb://localhost:27017/addressbookApp';

    mongodb.connect(url, function(err, db) {
        var collection = db.collection('addressbook');
        collection.find({}).toArray(function (err, results) {
            res.render('index', {
                person: results
            });
        });
    });
});

app.post('/', function(req, res) {
    var url = 'mongodb://localhost:27017/addressbookApp';

    mongodb.connect(url, function(err, db) {
        var collection = db.collection('addressbook');
        collection.insert([
            {
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                address: req.body.address
            }
        ], function(err, results) {
            res.redirect('/');
        });
    });
});
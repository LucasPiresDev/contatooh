var MongoClient = require('mongodb').MongoClient;
var _idObject   = require('mongodb').ObjectID;
var assert      = require('assert');

var IdProcurado = new _idObject("5c535999397cdb7f68022d00");

// Connect using the connection string
MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true }, function(err, db) {

    assert.equal(null, err);

    // Create a collection we want to drop later
    var collection = db.db('contatooh').collection('contatos');

    collection.find({_id:IdProcurado}).toArray(function(err, docs) {
        console.log(docs);

        db.close();
    });



})
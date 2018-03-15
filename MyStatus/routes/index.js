var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const config = require('../config.js');

// Import all models
const model = require('../models/file.model.js');


// Connect to MongoDB and create/use database as configured
mongoose.connection.openUri(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.dbName}`);

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.model('File').find({}, function(err, files) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  
    res.json(files);
  });
});

module.exports = router;

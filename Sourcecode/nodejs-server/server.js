// dependencies
var express = require('express');
var upload = require('express-fileupload');

var bodyParser = require('body-parser');
var morgan = require('morgan');

var user = require('./app/model/user');
var fileT = require('./app/com/filetransfer');
var tokenHandler = require('./app/security/tokenHandler');
var infoHandler = require('./app/com/InfoHandler');
var ip = require('./app/util/ip')

var cors = require('cors');

// instances
var app = express();

// attributes
var server_port = 3040;

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// upload
app.use(upload());

// bundle our routes
var apiRoutes = express.Router();

// connect the api routes under /api/*
app.use('/api', apiRoutes);

// Für axios
app.use(cors());


// functions

var server = app.listen(server_port, function () {

  fileT.initialize();
  ip.initialize(server);

})

// routes

apiRoutes.get('/info', function (req, res) {
  res.json({success: true, msg: 'Hallo'});
  //tokenHandler(req, res, infoHandler);
})

apiRoutes.post('/signup', function (req, res) {
  user.register(req, res);
})

apiRoutes.get('/authenticate', function (req, res) {
  user.login(req, res);
})
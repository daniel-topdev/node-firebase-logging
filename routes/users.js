var express = require('express');
var router = express.Router();

const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");

firebase.initializeApp({
  //here is firebase config information
});

// Initialize Cloud Functions through Firebase
var functions = firebase.functions();

const errorlog = functions.httpsCallable('errorlog');
const infolog = functions.httpsCallable('infolog');
const debuglog = functions.httpsCallable('debuglog');

/* GET users listing. */
router.get('/', function (req, res, next) {
  var logRequest = {
    router: '/users',
    content: 'sample content string'
  }
  errorlog(logRequest).then((result) => {
    console.log(result)
  });
  infolog(logRequest).then((result) => {
    console.log(result)
  });
  debuglog(logRequest).then((result) => {
    console.log(result)
  });
  res.send('respond with a resource');
});

module.exports = router;

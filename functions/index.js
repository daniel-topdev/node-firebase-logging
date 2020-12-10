const { response } = require('express');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.errorlog = functions.https.onRequest((request, response) => {
    const data = request.body.data
    const { router, content } = data
    functions.logger.error(router, " : " + JSON.stringify(content));
    response.json({ data: router + " : " + JSON.stringify(content) });
})

exports.debuglog = functions.https.onRequest((request, response) => {
    const data = request.body.data
    const { router, content } = data
    // functions.logger.log(router, " : " + JSON.stringify(content));
    console.log(router, " : " + JSON.stringify(content));
    response.json({ data: router + " : " + JSON.stringify(content) });
})

exports.infolog = functions.https.onRequest((request, response) => {
    const data = request.body.data
    const { router, content } = data
    functions.logger.info(router, " : " + JSON.stringify(content));
    response.json({ data: router + " : " + JSON.stringify(content) });
})
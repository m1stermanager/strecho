var strava = require('strava-v3');

var alexa = require('alexa-app');
var strecho = new alexa.app('strecho');

var parser = require('body-parser');
var app = require('express')();

app.use(parser.json());

// strava.athlete.listActivities({per_page:1}, (err, payload) => {
//     if (err) {
//         console.log('error');
//         console.log(err);
//     }

//     console.log('payload');
//     console.log(payload);
// });

strecho.intent('LastActivity', {}, (request, response) => {
    response.say('you ran so many miles. many many miles. good job.');
});

strecho.express(app, '', false);
// app.post('/strecho', (req, res) => {
//     console.log('received post to /strecho');
//     console.log(req.body);
//     strecho.request(req.body).then(res.json, res.send);
// });

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
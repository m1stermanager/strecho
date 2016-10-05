var strava = require('strava-v3');

var alexa = require('alexa-app');
var strecho = new alexa.app('strecho');

var app = require('express')();

// strava.athlete.listActivities({per_page:1}, (err, payload) => {
//     if (err) {
//         console.log('error');
//         console.log(err);
//     }

//     console.log('payload');
//     console.log(payload);
// });

strecho.intent('LastActivity', {}, (req, res) => {
    response.say('you ran so many miles. many many miles. good job.');
});

app.post('/strecho', (req, res) => {
    strecho.request(req.body).then(res.json);
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
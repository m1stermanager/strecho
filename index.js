var strava = require('strava-v3');
var convert = require('convert-units');

var alexa = require('alexa-app');
var strecho = new alexa.app('strecho');

var parser = require('body-parser');
var app = require('express')();

app.use(parser.json());

strecho.intent('LastActivity', {}, (request, response) => {
    strava.athlete.listActivities({per_page:1}, (err, payload) => {
        if (err) {
            console.log('error');
            console.log(err);

            response.say('I think strava is broken');
        }

        var item = payload[0];
        // console.log('payload');
        // console.log(payload);

        var miles = convert(item.distance).from('m').to('mi');
        console.log(`strava says: ${miles} miles`);

        response.say(`Wow! you ran ${miles} miles today! great job!`);
        response.send();
    });

    return false;
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
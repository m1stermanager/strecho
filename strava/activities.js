const Promise = require('bluebird');
const strava = Promise.promisifyAll(require('strava-v3'));
const convert = require('convert-units');
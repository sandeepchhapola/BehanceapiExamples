var behanceapi = require('behanceapi');

var config=require('./config');

var behance = new behanceapi.Behance(config.keys.behance.client_id);

module.exports.behance=behance;
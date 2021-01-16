'use strict';

const api = require('./api');
const feed = require('./feed');

const youtube = {
  ...api,
  ...feed,
};

module.exports = youtube;

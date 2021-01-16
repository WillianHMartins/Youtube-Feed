'use strict';

const { google } = require('googleapis');

const {
  youtube: {
    serviceAccount: { client_email, private_key, scope },
  },
} = require('config');

const getAccessToken = async () => {
  const jwtAuth = new google.auth.JWT(client_email, null, private_key, scope);

  const jwtCredentials = await jwtAuth.authorize();
  const { access_token } = jwtCredentials;

  return access_token || '';
};

const auth = {
  getAccessToken,
};

module.exports = auth;

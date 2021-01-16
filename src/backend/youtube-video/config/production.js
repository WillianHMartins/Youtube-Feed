'use strict';

const modules = {
  db: {
    name: process.env.POSTGRESQL_DATABASE,
    password: process.env.POSTGRESQL_PASSWORD,
    port: process.env.POSTGRESQL_TCP_PORT || '5432',
    username: process.env.POSTGRESQL_USER,
    options: {
      dialect: process.env.POSTGRESQL_DIALECT || 'postgres',
      host: process.env.POSTGRESQL_HOST,
    },
  },
  server: {
    jwt: {
      secret: 'SNuK0kcaDAOq3bFILHKoIxbIkAHGORATIOn1erw4Y7mGO2kl4DgtKu4KQT',
    },
  },
  youtube: {
    api: {
      allowedResources: ['search', 'videos'],
      baseUrl: process.env.YOUTUBE_API_BASE_URL,
    },
    pagination: {
      maxVideoCount: process.env.YOUTUBE_API_MAX_VIDEO_COUNT,
      maxResultsPerPage: process.env.YOUTUBE_API_MAX_RESULTS_PER_PAGE,
    },
    serviceAccount: {
      type: process.env.YOUTUBE_API_ACCOUNT_TYPE,
      project_id: process.env.YOUTUBE_API_PROJECT_ID,
      private_key_id: process.env.YOUTUBE_API_PRIVATE_KEY_ID,
      private_key: process.env.YOUTUBE_API_PRIVATE_KEY,
      client_email: process.env.YOUTUBE_API_CLIENT_EMAIL,
      client_id: process.env.YOUTUBE_API_CLIENT_ID,
      auth_uri: process.env.YOUTUBE_API_AUTH_URI,
      token_uri: process.env.YOUTUBE_API_TOKEN_URI,
      auth_provider_x509_cert_url:
        process.env.YOUTUBE_API_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.YOUTUBE_API_CLIENT_X509_CERT_URL,
      scope: process.env.YOUTUBE_API_SCOPE,
    },
  },
};

module.exports = modules;

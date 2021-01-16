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
      logging: console.log,
    },
  },
  server: {
    jwt: {
      secret: 'STRENGEHEIM',
    },
  },
  youtube: {
    api: {
      allowedResources: ['search', 'videos'],
      baseUrl: 'https://www.googleapis.com/youtube/v3',
    },
    pagination: {
      maxVideoCount: 200,
      maxResultsPerPage: 50,
    },
    serviceAccount: {
      type: 'service_account',
      project_id: 'yt-weekly-feed',
      private_key_id: '9a67cd8949d0bbe4ad21225df5bbc9121525dd7a',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5A22Ra3CbJlEv\nnoEFFmxrolVh1rU22YwcCmFPRj9PcduNEPd7JwIy2yvMxm+g1ovTdIdsdelWl3hz\n9GoPdwvBrhZ6+HcFboSAifKue7zV0gd5H6s4bRBj4myLgLnUCpEJbbMyAZkRJQ3C\ndBZOQmEmFwIwFEaVAMoyWmfM4C2f6rSUlNTRz4y+k+wkbMQ0Zd/v0gGfWE/jjqiR\nfPPKyEnpEoak2GdLGMWVRtCcn2iK3jfO70A/58+P28YzRoHL9u08MppCyRzoiaNF\nu9Ve74qgbaPpbLJAsXzw0jHXg1VO5NBWYEB5xnFrHTgyxVKT9QWzt1pMgKMolYw6\nbmj+NxXlAgMBAAECggEAAP7uekumf8NJSRUUkzMvcrXdOUlXUNwDZ8w7gVp6sUIG\n4T+/4UMQvTbWScQgqjA1cPYt22zYDG4EyTT91Cb7Inf+KXvIYjhZ0LpNWtiSJ+F5\nRlLgEE3v+mWn2WlgNq624KLdRc3h5ch6BjurOhEb5kFV8u3NAnTOYc6ARAdJ35Q4\nvBlsJKjsQzQRwJBpfBrNmmEw1ou1C6On1MnU2eHOq8bs6TL6E2HPfxzP6/1J0kpr\nL/icEx5Ub7fEEuac0JODtJFaJpRVPfqP1kIrTogNgYLtEcqiNtwTG6NMp+ZElDnx\nSxUpTuO1VdYW22yZLNlKAuyvS1DGY8yq/9ZaiDqVyQKBgQDf778NjHRMwiO43u7i\nQwEt8uWERnNqKvhoA+sUSt7i6qY6on+QWzDigdD9yOtZaALcF24JHbdDFs5FxYkf\nM4V6hx8mfr8dn70ccz2qmyZ0Marjjo7u9+/ualYQgFUpL8OL2AYmd51iJ38AepMM\nodBijRcpzR7gHpK3RhO2/eEoXQKBgQDTgPqdTO24ulZ4Hl1e7+oUAoQwnIkG2l5k\nhGFUXjte8xqym+trFnOtbZbRs2/6ZUSawOew49iyLRFIEFlChslrY+8wUqf447PN\n5HM72u3kIShLWuZ3oc+M622VfmzIKC+WHpbHa49nxTcGLcvfqCUaA9R25JIOGQcm\nmEsv2uArKQKBgQDNiUdaMCguq6IN9NBdbBKREfgHSIJ2V6pYDgCeR3n73FNmTe+3\nl3tu6qffx6H8FbNKP1cHlva15SC+eWg58xf4Nj0pH/xaPFte2YcoJ+9LhqrK4fXe\n8EKQGZmU27VOcECTAlviwrb5eDbhQZ/mYD7btZQlEdfc7TLMdM1zj+IxIQKBgQDH\nfsjkxkMUEu6srjdz7Oflp9n34C5/gEm4lgUYByoJDVUJU3hisfK6irvPYGkmzY5A\nSeRAPSmQJmI+ju0iivBBkylxcwVtBZn7gpgOxRnOLFhNe5gXD1EtooLilzUUNpNs\nDb46q4HAZ4zXDytV8svMFgC5hC8fjQvpo4yHvvPiwQKBgAC7SCpj55ccOfAe43dp\ncSCJkiw5lLtgf6oqsKx86vIr3hyOR+T9gDD+ElPD7HEECCzo8pqjZxqJLIs25OoC\ngrEwBHUTOtCIhcHTx/Eyejir5VidAN758AFc8SMda56iTofAJro2GNeYN7GR+vFy\nAR1m1g9RKw5AngeJxCEYwmHf\n-----END PRIVATE KEY-----\n',
      client_email: 'yt-weekly-feed@yt-weekly-feed.iam.gserviceaccount.com',
      client_id: '105376180793566635582',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/yt-weekly-feed%40yt-weekly-feed.iam.gserviceaccount.com',
      scope: 'https://www.googleapis.com/auth/youtube',
    },
  },
};

module.exports = modules;

const proxy = require('http-proxy-middleware');

let backendUrl = '';

if (process.env.NODE_ENV === 'production') {
  backendUrl = 'http://127.0.0.1:3100/';
} else {
  backendUrl = 'http://backend:3100/';
}

module.exports = app => {
  const target = process.env.REACT_APP_PROXY_TARGET || backendUrl;
  app.use(proxy(['/api'], { target }));
};

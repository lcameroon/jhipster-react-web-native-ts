// const moment = require('moment');
// const _ = require('lodash');
const userdb = require('./data/users.json');

module.exports = (req, res, next) => {
  // Add createdDate
  // if (req.method === 'POST') {
  //     req.body.createdDate = Date.now();
  // }

  // account
  if (req.method === 'GET' && req.url === '/account') {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401;
      const message = 'Error in authorization format';
      res.status(status).json({ status, message });
      return;
    }
  }

  // authenticate
  if (req.method === 'POST' && req.url === '/authenticate') {
    const { username, password } = req.body;
    if (isAuthenticated({ username, password }) === false) {
      const status = 401;
      const message = 'Incorrect username or password';
      res.status(status).json({ status, message });
      return;
    } else {
      // Add Authorization header
      req.method = 'GET';
      res.header(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTUzMTczMTA0NSwiZXhwIjoxNTMxNzM0NjQ1fQ.NgYp6HbPjzv1ihFnLJpxjovBkt-w6CLfibS92hJFAsA'
      );
    }
  }

  // Continue to JSON Server router
  next();
};

// Check if the user exists in database
function isAuthenticated({ username, password }) {
  return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1;
}

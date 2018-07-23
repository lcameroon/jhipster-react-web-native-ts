const db = require('./data/db.json');
const users = require('./data/users.json');
const refdata = require('./data/refdata.json');

module.exports = () => {
  const data = {
    ...db,
    ...users,
    refdata
  };

  return data;
};

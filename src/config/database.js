const sql = require('mssql');
const { ConnectionPool } = require('mssql');

const config = {
  user: 'user1',
  password: '12345',
  server: 'DESKTOP-75HF6R4',
  database: 'employee',
  options: {
    encrypt: false, // Non-SSL connection
  },
};

sql.connect(config, function (error) {
  if (error) console.log(error);
  else console.log('Connected to SQL Server');
});

module.exports = sql;
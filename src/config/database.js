const sql = require('mssql');

var config = {
    server: "DESKTOP-CGH6082",
    database: "employee",
    driver: "mssql",
    option: {
        trustedConnection: true
    }
}

sql.connect(config, function(error){
    if (error)console.log(error);
    var request = new sql.Request();
    request.query("SELECT * FROM karyawan", function(error, records){
        if (error)console.log(error);
        else console.log(records);
    })
})

// const dbPool = sql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
// });

// module.exports = dbPool.promise()
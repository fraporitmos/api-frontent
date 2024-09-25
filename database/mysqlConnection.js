const mysql = require("mysql2")
const {database} = require('./keys');
const mysqlConnection = mysql.createPool(database);
const {promisify} = require('util');

mysqlConnection.getConnection( function(err,conn){
    if(err){
        console.log(err);
    }else{
        if(conn) conn.release();
        console.log('✅ Base de datos conectada');
        return;
    }
});
//convert to promiseto has callback
mysqlConnection.query = promisify(mysqlConnection.query);
module.exports = mysqlConnection;
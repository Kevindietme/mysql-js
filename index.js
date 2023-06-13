// import the mysql2 library 
import mysql from 'mysql2'
import connectionInfo from './secretStuff.js'
// connect to our myql database (give it our credentials)
const connection = mysql.createConnection(connectionInfo)
// run a simple query to get two movies 
connection.query('select * from movies',
    function (error, results) {
        console.log(error)
        //console.table(results)
    console.table(results)
    connection.end()
    }
)
// console.table the results 


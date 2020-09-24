'use strict'

const mysql = require('mysql')

// local mysql db connection
const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    password : '',
    database : 'fsw_learn'
})

dbConn.connect(function(err) {
    if (err) throw err
        console.log('Database connected')
    
})

module.exports = dbConn
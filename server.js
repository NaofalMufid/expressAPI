const mysql = require('mysql')

const express = require('express')
const bodyParser = require('body-parser')
// create express app
const app = express()

// PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080

// parse request of content-type : application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse request of content-type : application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
    res.send("Hello Wolrd")
})

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')

// Using as middleware
app.use('/api/v1/employees', employeeRoutes)

// Listen for request
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
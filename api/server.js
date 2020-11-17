const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// Import Router files

// Api
const server = express()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

// Router endpoints

server.get('/', (req, res) => {
    res.json({message: 'Server is running'})
})

// Error code
server.use((err, req, res, next) => {
    res.status(err.code).json(err)
})

module.exports = server
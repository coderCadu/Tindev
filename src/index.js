const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()
const port = 3333

mongoose.connect('mongodb+srv://tindev:87654321@cluster0-shnlq.mongodb.net/instadev?retryWrites=true&w=majority', { useNewUrlParser: true })

server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(port, () => console.log(`The server running in localhost:${port}. For cancel press CTRL + C` ))

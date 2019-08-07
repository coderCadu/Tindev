const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikesController = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:id/likes', LikeController.store)
routes.post('/devs/:id/dislikes', DislikesController.store)

module.exports = routes

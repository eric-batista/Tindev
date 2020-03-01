const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/Tindev/devs', DevController.index);
routes.post('/Tindev/devs', DevController.store);
routes.post('/Tindev/devs/:devId/likes', LikeController.store);
routes.post('/Tindev/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;
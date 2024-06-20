const {home, create} = require('../controllers/rootController.js');

const express = require('express');
const rootRouter = express.Router();

rootRouter.get('/', home);
rootRouter.post('/create', create);

module.exports = rootRouter;
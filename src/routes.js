const express = require('express');
const UserController = require('./controller/UserController')
const AddressController = require('./controller/AddressController')
const TechController = require('./controller/TechController')

const routes = express.Router();


routes.get('/user', UserController.index)
routes.post('/user', UserController.store)

routes.get('/user/:user_id/addresses' , AddressController.index)
routes.post('/user/:user_id/addresses' , AddressController.store)
routes.delete('/user/:user_id/addresses', AddressController.delete)


routes.get('/user/:user_id/techs', TechController.index)
routes.post('/user/:user_id/techs', TechController.store)

module.exports = routes;
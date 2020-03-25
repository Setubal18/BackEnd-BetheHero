import express from 'express'

import OngsController from '../controller/OngsController'
const routes = express.Router()

routes.post('/ongs',
OngsController.store);

export default routes

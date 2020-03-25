import express from 'express'

import OngsController from '../controllers/OngsController'
import IncidentsController from '../controllers/incidentController'
const routes = express.Router()

//ONGs
routes.post('/ongs',
OngsController.store);
routes.get('/ongs',
OngsController.list)

//Incidentes
routes.post('/incidents',
IncidentsController.store)
routes.get('/incidents',
IncidentsController.list)

export default routes

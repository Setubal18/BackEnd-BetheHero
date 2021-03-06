import express from 'express'

import OngsController from '../controllers/OngsController'
import IncidentsController from '../controllers/IncidentController'
import PublicController from '../controllers/PublicController'
import SessionController from '../controllers/SessionController'
const routes = express.Router()


routes.post('/login',
SessionController.create)

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
routes.delete('/incidents/:id',
IncidentsController.delete)


//public Routes
routes.get('/public/incidents',
PublicController.allList)


export default routes

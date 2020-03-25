import express from 'express'
const routes = express.Router()

routes.post('/users', (req:any, res:any) => {
	const body = req.body
	console.log(body)
	return res.send(`Sucesso ! ${body}`)
});

export default routes

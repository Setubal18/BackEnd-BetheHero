import express, { application } from "express"
import routes from "../routes/routes"

export default new class ExpressServer {
private app:any

public constructor(){
		this.app = express()
		this.app.use(express.json())
		this.routes()
	}

	public initServer(){
		this.app.use(routes)
		this.app.listen(3333, () => {
			console.log('Example app listening on port 3333!');
			})
	}


	public routes(){
		this.app.use(routes)
	}
}

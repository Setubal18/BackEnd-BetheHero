import { Request, Response, } from 'express';
import {IncidentInterface} from '../models/incident'
import connection from '../database/connection'
class IncidentsController{

	public async store(req:Request,res:Response){
		const ong_id = req.headers.authorization

		const incident: IncidentInterface = {
			title: req.body.title,
			ong_id:ong_id,
			description:req.body.description,
			value: req.body.value,
			created_at: new Date()

		}
		let id:any
		try{
			[id] = await	connection('incidents').insert({
				title:incident.title,
				description:incident.description,
				value:incident.value,
				ong_id:incident.ong_id,
				created_at: incident.created_at
			})
		}
		catch(e){
			res.status(422).json({error:e.error})
		}
		return res.json({id})
	}

	public async list(req:Request,res:Response){
		let incidents:any
		try{
			incidents = await connection('incidents').select('*')
		}
		catch(e){
			res.status(422).json({error:e.error})
		}
		return res.json(incidents)
	}


}

export default new IncidentsController();

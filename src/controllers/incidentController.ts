import { Request, Response, response, } from 'express';
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

	public async delete(req:Request,res:Response){
		const { id } = req.params
		const ong_id = req.headers.authorization
		let incident: any
		try{
			incident = await connection('incidents')
		.where('id',id)
		.select('ong_id')
		.first()
		if(incident.ong_id !== ong_id ){
			return res.status(401).json({error:'Operanção não permitida'})
		}
			await(connection('incidents').where('id',id).delete())
	}
		catch(e){
			res.status(422).json({error:e.error})
		}
		return res.json({message:'sucesso na exclusão'})
	}


}

export default new IncidentsController();

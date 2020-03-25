import {IncidentInterface} from '../models/incident'
import connection from '../database/connection'
import { Request, Response, response } from 'express';
import paginator from '../config/pagination';

class PublicController{
	public async allList(req:Request,res:Response){
		let incidents:any
		const ongConsult= [
		'incidents.*',
		'ongs.name',
		'ongs.email',
		'ongs.whatsapp',
		'ongs.city',
		'ongs.uf']
		const {page, limit } = req.query
		const pagination = await paginator(page,limit)
		const [count] = await connection('incidents').count()
		response.header('X-Total-Count',count['count(*)'])

		try{
			incidents = await connection('incidents')
			.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
			.limit(pagination.limit)
			.offset(pagination.offset)
			.select(ongConsult)
		}
		catch(e){
			res.status(422).json({error:e.error})
		}
		return res.json(incidents)
	}
}

export default new PublicController();


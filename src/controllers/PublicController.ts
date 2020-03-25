import {IncidentInterface} from '../models/incident'
import connection from '../database/connection'
import { Request, Response } from 'express';


class PublicController{
	public async allList(req:Request,res:Response){
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

export default new PublicController();


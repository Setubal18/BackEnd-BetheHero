import { Request, Response, } from 'express';
import crypto from 'crypto'
import {OngInterface} from '../models/ongs'
import connection from '../database/connection'
class OngController{

	public async store(req:Request,res:Response){
		const id = crypto.randomBytes(6).toString('HEX')
		const ong: OngInterface = {
			name: req.body.name,
			id:id,
			email:req.body.email,
			whatsapp: req.body.whatsapp,
			city: req.body.city,
			uf: req.body.uf
		}

		try{
			await	connection('ongs').insert({
				id:ong.id,
				name:ong.name,
				email:ong.email,
				whatsapp:ong.whatsapp,
				city:ong.city,
				uf:ong.uf
			})
		}
		catch(e){
			res.status(422).json({error:e.error})
		}
		return res.json({id})
	}

	public async list(req:Request,res:Response){
		let ongs:any
		try{
			ongs = await connection('ongs').select('*')
		}
		catch(e){
			res.status(422).json({error:e.error})
		}
		return res.json(ongs)
	}


}

export default new OngController();

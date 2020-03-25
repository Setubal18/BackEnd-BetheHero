import connection from '../database/connection'
import { Request, Response } from 'express';


class SessionController{

	public async create(req:Request,res:Response) {
		const {id} = req.body
		let ong: any

		try {
			ong = await connection('ongs')
			.where('id',id)
			.first()
			if(!ong){
				return res.status(400).json({error:'Não foi encontrado ONG com esse ID'})
			}
		} catch (error) {
			return res.json({error:error})
		}
		return res.json(ong)
	}

}

export default new SessionController();

